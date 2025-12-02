package com.example.hmscore.repository.patient;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PatientHospitalizationConfiguration {

    private boolean withPatient;
    private boolean withRoom;
    private boolean withHospitalizationDrugs;
    private boolean withMedicalHistory;
    private boolean withHospitalizationDocuments;
}
