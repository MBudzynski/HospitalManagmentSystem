package com.example.hmscore.ddd.patient.infrastructure.jpa.patient_hospitalization;

import com.example.hmscore.ddd.organization.infrastructure.jpa.room.RoomEntity;
import com.example.hmscore.ddd.patient.infrastructure.jpa.hospitalization_document.HospitalizationDocumentEntity;
import com.example.hmscore.ddd.patient.infrastructure.jpa.medical_history.MedicalHistoryEntity;
import com.example.hmscore.ddd.patient.infrastructure.jpa.patient.PatientEntity;
import com.example.hmscore.ddd.patient.infrastructure.jpa.patient_drug.HospitalizationDrugEntity;
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
}
