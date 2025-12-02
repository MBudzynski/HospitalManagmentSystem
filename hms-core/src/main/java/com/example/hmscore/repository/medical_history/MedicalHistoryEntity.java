package com.example.hmscore.repository.medical_history;

import com.example.hmscore.dto.MedicalHistoryDTO;
import com.example.hmscore.repository.patient.PatientHospitalizationEntity;
import com.example.hmscore.repository.document.DocumentEntity;
import com.example.hmscore.repository.staff.StaffConfiguration;
import com.example.hmscore.repository.staff.StaffEntity;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Builder
@Entity
@AllArgsConstructor
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

    public MedicalHistoryDTO toDTO () {
        return MedicalHistoryDTO
                .builder()
                .medicalHistoryId(medicalHistoryId)
                .staff(staff.toDTO(StaffConfiguration.builder().build()))
                .creationDate(creationDate)
                .description(description)
                .build();
    }

    public static MedicalHistoryEntity toEntity (Long hospitalizationId, MedicalHistoryDTO dto) {
        return MedicalHistoryEntity
                .builder()
                .patientHospitalization(PatientHospitalizationEntity
                        .builder()
                        .patientHospitalizationId(hospitalizationId)
                        .build())
                .medicalHistoryId(dto.getMedicalHistoryId())
                .staff(dto.getStaff() == null ? null : StaffEntity.toEntity(dto.getStaff()))
                .creationDate(dto.getCreationDate())
                .description(dto.getDescription())
                .build();
    }
}
