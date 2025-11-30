package com.example.hmscore.repository.medical_history;

import com.example.hmscore.dto.MedicalHistoryDTO;
import com.example.hmscore.repository.patient.PatientHospitalizationEntity;
import com.example.hmscore.repository.document.DocumentEntity;
import com.example.hmscore.repository.staff.StaffEntity;
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

    public MedicalHistoryDTO toDTO () {
        return new MedicalHistoryDTO();
    }
}
