package com.example.hmscore.ddd.patient.infrastructure.jpa.medical_history;

import com.example.hmscore.ddd.patient.domain.MedicalHistoryAdapter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MedicalHistoryAdapterImpl implements MedicalHistoryAdapter {

    private final MedicalHistoryJpaRepository medicalHistoryJpaRepository;

}
