package com.example.hmscore.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PatientHospitalizationDTO {

    private Long patientHospitalizationId;
    private LocalDate dateFrom;
    private LocalDate dateTo;
    private PatientDTO patient;
}
