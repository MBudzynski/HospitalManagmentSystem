package com.example.hmscore.ddd.organization.infrastructure.jpa.room;

import com.example.hmscore.ddd.organization.infrastructure.jpa.department.DepartmentEntity;
import com.example.hmscore.ddd.patient.infrastructure.jpa.patient_hospitalization.PatientHospitalizationEntity;
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

    private Integer flor;

    private String bedNumber;

    @ManyToOne
    @JoinColumn(name = "department_id")
    private DepartmentEntity department;

    @OneToMany(mappedBy = "room", cascade = CascadeType.ALL)
    private List<PatientHospitalizationEntity> patientHospitalizations = new ArrayList<>();
}
