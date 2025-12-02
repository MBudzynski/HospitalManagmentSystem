package com.example.hmscore.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PatientHospitalizationDTO {

    private Long patientHospitalizationId;
    private LocalDate dateFrom;
    private LocalDate dateTo;
    private PatientDTO patient;
    private RoomDTO room;
    private List<HospitalizationDrugDTO> hospitalizationDrugs;
    private List<MedicalHistoryDTO> medicalHistories;
    private List<HospitalizationDocumentDTO> hospitalizationDocuments;
}
