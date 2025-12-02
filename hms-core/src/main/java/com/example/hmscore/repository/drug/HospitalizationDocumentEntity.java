package com.example.hmscore.repository.drug;

import com.example.hmscore.dto.HospitalizationDocumentDTO;
import com.example.hmscore.repository.document.DocumentEntity;
import com.example.hmscore.repository.patient.PatientHospitalizationEntity;
import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
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

    public HospitalizationDocumentDTO toDTO() {
        return HospitalizationDocumentDTO
                .builder()
                .hospitalizationDocumentId(this.hospitalizationDocumentId)
                .title(this.title)
                .userLogin(this.userLogin)
                .createdAt(this.createdAt)
                .documents(documents == null ? new ArrayList<>() : documents.stream().map(DocumentEntity::toDTO).toList())
                .build();
    }
}
