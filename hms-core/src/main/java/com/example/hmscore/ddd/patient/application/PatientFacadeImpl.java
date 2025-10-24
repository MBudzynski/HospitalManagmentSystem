package com.example.hmscore.ddd.patient.application;

import com.example.hmscore.common.patient.PatientFacade;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
class PatientFacadeImpl implements PatientFacade {

    private final PatientService patientService;
}
