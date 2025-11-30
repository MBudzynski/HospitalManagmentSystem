package com.example.hmscore.services;

import com.example.hmscore.repository.medical_history.MedicalHistoryJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MedicalHistoryService {

    private final MedicalHistoryJpaRepository medicalHistoryJpaRepository;
}
