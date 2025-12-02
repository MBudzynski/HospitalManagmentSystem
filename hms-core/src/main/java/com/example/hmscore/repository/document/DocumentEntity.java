package com.example.hmscore.repository.document;

import com.example.hmscore.dto.DocumentDTO;
import com.example.hmscore.repository.drug.HospitalizationDocumentEntity;
import com.example.hmscore.repository.medical_history.MedicalHistoryEntity;
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

    public DocumentDTO toDTO() {
        return DocumentDTO
                .builder()
                .documentId(documentId)
                .userLogin(userLogin)
                .addDateTime(addDateTime)
                .path(path)
                .build();
    }
}
