package com.example.hmscore.ddd.patient.infrastructure.jpa.hospitalization_document;

import com.example.hmscore.ddd.patient.infrastructure.jpa.document.DocumentEntity;
import com.example.hmscore.ddd.patient.infrastructure.jpa.patient_hospitalization.PatientHospitalizationEntity;
import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@NoArgsConstructor
@Table(name = "hospitalization_document")
public class HospitalizationDocumentEntity {

    @Id
    @Column(name = "hospitalization_document_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long hospitalizationDocumentId;

    private String title;

    private String userLogin;

    private LocalDateTime createdAt;

    @ManyToOne
    @JoinColumn(name = "patient_hospitalization_id")
    private PatientHospitalizationEntity patientHospitalization;

    @OneToMany(mappedBy = "hospitalizationDocument", cascade = CascadeType.ALL)
    private List<DocumentEntity> documents;
}
