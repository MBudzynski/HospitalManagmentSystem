package com.example.hmscore.repository.room;

import com.example.hmscore.dto.RoomDTO;
import com.example.hmscore.repository.patient.PatientHospitalizationConfiguration;
import com.example.hmscore.repository.patient.PatientHospitalizationEntity;
import com.example.hmscore.repository.department.DepartmentEntity;
import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Table(name = "room")
public class RoomEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long roomId;

    private String number;

    private Integer floor;

    private String bedNumber;

    @ManyToOne
    @JoinColumn(name = "department_id")
    private DepartmentEntity department;

    @OneToMany(mappedBy = "room", cascade = CascadeType.ALL)
    private List<PatientHospitalizationEntity> patientHospitalizations = new ArrayList<>();

    public RoomDTO toDTO(RoomConfiguration configuration) {

        PatientHospitalizationConfiguration patientHospitalizationConfiguration = PatientHospitalizationConfiguration
                .builder()
                .withPatient(true)
                .build();


        return RoomDTO
                .builder()
                .roomId(roomId)
                .number(number)
                .floor(floor)
                .bedNumber(bedNumber)
                .department(configuration.isWithDepartments() ? department.toDTO() : null)
                .hospitalizations(configuration.isWithPatientHospitalizations() ? patientHospitalizations.stream().map(x -> x.toDTO(patientHospitalizationConfiguration)).toList() : null)
                .build();
    }
}
