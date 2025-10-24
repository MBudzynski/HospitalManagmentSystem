package com.example.hmscore.ddd.patient.application;

import com.example.hmscore.ddd.patient.domain.MedicalHistoryAdapter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
class MedicalHistoryService {

    private final MedicalHistoryAdapter medicalHistoryAdapter;
}
