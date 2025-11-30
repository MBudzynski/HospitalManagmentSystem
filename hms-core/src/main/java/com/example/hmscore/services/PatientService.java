package com.example.hmscore.services;

import com.example.hmscore.repository.patient.PatientJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PatientService {

    private final PatientJpaRepository patientJpaRepository;
}
