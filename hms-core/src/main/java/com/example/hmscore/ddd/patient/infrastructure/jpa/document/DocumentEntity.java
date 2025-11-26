package com.example.hmscore.ddd.patient.infrastructure.jpa.document;

import com.example.hmscore.ddd.patient.infrastructure.jpa.hospitalization_document.HospitalizationDocumentEntity;
import com.example.hmscore.ddd.patient.infrastructure.jpa.medical_history.MedicalHistoryEntity;
import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@Table(name = "document")
public class DocumentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long documentId;

    private String userLogin;
    private LocalDateTime addDateTime;
    private String path;

    @ManyToOne
    @JoinColumn(name = "medical_history_id")
    private MedicalHistoryEntity medicalHistory;

    @ManyToOne
    @JoinColumn(name = "hospitalization_document_id")
    private HospitalizationDocumentEntity hospitalizationDocument;
}
