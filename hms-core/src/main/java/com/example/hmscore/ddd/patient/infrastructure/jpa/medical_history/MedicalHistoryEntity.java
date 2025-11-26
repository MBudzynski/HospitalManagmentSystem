package com.example.hmscore.ddd.patient.infrastructure.jpa.medical_history;

import com.example.hmscore.ddd.patient.infrastructure.jpa.document.DocumentEntity;
import com.example.hmscore.ddd.patient.infrastructure.jpa.patient.PatientEntity;
import com.example.hmscore.ddd.patient.infrastructure.jpa.patient_hospitalization.PatientHospitalizationEntity;
import com.example.hmscore.ddd.staff.infrastructure.jpa.staff.StaffEntity;
import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Table(name = "medical_history")
public class MedicalHistoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long medicalHistoryId;

    @ManyToOne
    @JoinColumn(name = "patient_hospitalization_id")
    private PatientHospitalizationEntity patientHospitalization;

    @ManyToOne
    @JoinColumn(name = "staff_id")
    private StaffEntity staff;

    private LocalDateTime creationDate;

    private String description;


    @OneToMany(mappedBy = "medicalHistory", cascade = CascadeType.ALL)
    private List<DocumentEntity> documents = new ArrayList<>();
}
