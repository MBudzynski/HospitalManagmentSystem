package com.example.hmscore.repository.patient;

import com.example.hmscore.dto.PatientHospitalizationDTO;
import com.example.hmscore.repository.drug.HospitalizationDocumentEntity;
import com.example.hmscore.repository.drug.HospitalizationDrugEntity;
import com.example.hmscore.repository.medical_history.MedicalHistoryEntity;
import com.example.hmscore.repository.room.RoomEntity;
import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Table(name = "patient_hospitalization")
public class PatientHospitalizationEntity {

    @Id
    @Column(name = "patient_hospitalization_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long patientHospitalizationId;

    private LocalDate dateFrom;

    private LocalDate dateTo;

    @ManyToOne
    @JoinColumn(name = "patient_id")
    private PatientEntity patient;

    @ManyToOne
    @JoinColumn(name = "room_id")
    private RoomEntity room;

    @OneToMany(mappedBy = "patientHospitalization", cascade = CascadeType.ALL)
    private List<HospitalizationDrugEntity> hospitalizationDrugs = new ArrayList<>();

    @OneToMany(mappedBy = "patientHospitalization", cascade = CascadeType.ALL)
    private List<MedicalHistoryEntity> medicalHistory = new ArrayList<>();

    @OneToMany(mappedBy = "patientHospitalization", cascade = CascadeType.ALL)
    private List<HospitalizationDocumentEntity> hospitalizationDocuments = new ArrayList<>();

    public PatientHospitalizationDTO toDTO(PatientHospitalizationConfiguration patientHospitalizationConfiguration) {
        return PatientHospitalizationDTO
                .builder()
                .patientHospitalizationId(patientHospitalizationId)
                .dateFrom(dateFrom)
                .dateTo(dateTo)
                .patient(patientHospitalizationConfiguration.isWithPatient() ? patient.toDTO() : null)
                .build();
    }
}
