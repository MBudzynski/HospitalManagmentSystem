package com.example.hmscore.services;

import com.example.hmscore.dto.PatientDTO;
import com.example.hmscore.dto.StaffDTO;
import com.example.hmscore.dto.search_criteria.PatientSearchCriteria;
import com.example.hmscore.dto.search_criteria.StaffSearchCriteria;
import com.example.hmscore.repository.patient.PatientConfiguration;
import com.example.hmscore.repository.patient.PatientEntity;
import com.example.hmscore.repository.patient.PatientJpaRepository;
import com.example.hmscore.repository.patient.PatientSpecification;
import com.example.hmscore.repository.staff.StaffConfiguration;
import com.example.hmscore.repository.staff.StaffSpecification;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PatientService {

    private final PatientJpaRepository patientJpaRepository;

    public PatientDTO addPatient(PatientDTO dto) {
        return patientJpaRepository.save(PatientEntity.toEntity(dto)).toDTO();
    }

    public List<PatientDTO> findAllPatients() {
        return patientJpaRepository.findAll()
                .stream()
                .map(PatientEntity::toDTO)
                .toList();
    }

    public List<PatientDTO> searchPatients(PatientSearchCriteria criteria) {

       return patientJpaRepository.findAll(PatientSpecification.search(criteria))
               .stream()
               .map(PatientEntity::toDTO)
               .toList();
    }

    public void deletePatient(Long patientId) {
        PatientEntity patient = patientJpaRepository.findById(patientId)
                .orElseThrow(() -> new RuntimeException("Patient not found"));

        if(patient.getHospitalizations() != null && !patient.getHospitalizations().isEmpty()) {
            throw new RuntimeException("Patient has hospitalizations");
        }
        patientJpaRepository.deleteById(patientId);
    }
}
