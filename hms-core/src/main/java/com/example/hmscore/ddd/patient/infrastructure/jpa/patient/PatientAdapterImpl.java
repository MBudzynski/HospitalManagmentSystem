package com.example.hmscore.ddd.patient.infrastructure.jpa.patient;

import com.example.hmscore.ddd.patient.domain.PatientAdapter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PatientAdapterImpl implements PatientAdapter {

    private final PatientJpaRepository patientJpaRepository;
}
