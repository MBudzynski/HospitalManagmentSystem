package com.example.hmscore.ddd.patient.application;

import com.example.hmscore.common.patient.MedicalHistoryFacade;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
class MedicalHistoryFacadeImpl implements MedicalHistoryFacade {

    private final MedicalHistoryService medicalHistoryService;
}
