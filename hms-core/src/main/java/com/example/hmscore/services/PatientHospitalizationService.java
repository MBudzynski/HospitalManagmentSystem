package com.example.hmscore.services;

import com.example.hmscore.dto.HospitalizationDrugDTO;
import com.example.hmscore.dto.PatientHospitalizationDTO;
import com.example.hmscore.repository.drug.HospitalizationDrugEntity;
import com.example.hmscore.repository.drug.HospitalizationDrugJpaRepository;
import com.example.hmscore.repository.patient.PatientHospitalizationConfiguration;
import com.example.hmscore.repository.patient.PatientHospitalizationEntity;
import com.example.hmscore.repository.patient.PatientHospitalizationJpaRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PatientHospitalizationService {

    private final PatientHospitalizationJpaRepository patientHospitalizationJpaRepository;
    private final HospitalizationDrugJpaRepository hospitalizationDrugJpaRepository;

    public List<PatientHospitalizationDTO> findHospitalizationByDepartmentId(Long departmentId) {
        PatientHospitalizationConfiguration config = PatientHospitalizationConfiguration
                .builder()
                .withPatient(true)
                .withHospitalizationDocuments(true)
                .withHospitalizationDrugs(true)
                .withMedicalHistory(true)
                .withRoom(true)
                .build();

        return patientHospitalizationJpaRepository
                .findHospitalizationByDepartmentId(departmentId)
                .stream()
                .map(x -> x.toDTO(config))
                .toList();
    }

    public PatientHospitalizationDTO findpatientHospitalization(Long patientHospitalizationId) {
        PatientHospitalizationConfiguration config = PatientHospitalizationConfiguration
                .builder()
                .withPatient(true)
                .withHospitalizationDocuments(true)
                .withHospitalizationDrugs(true)
                .withMedicalHistory(true)
                .withRoom(true)
                .build();

        return patientHospitalizationJpaRepository.findById(patientHospitalizationId)
                .orElseThrow(()-> new RuntimeException("PatientHospitalization not found")).toDTO(config);
    }

    public void saveDrugToHospitalization(Long patientHospitalizationId, HospitalizationDrugDTO dto) {
        hospitalizationDrugJpaRepository.save(HospitalizationDrugEntity.toEntity(patientHospitalizationId, dto)).toDTO();
    }

    public void finishHospitalization(Long hospitalizationId) {
        PatientHospitalizationEntity patientHospitalizationEntity = patientHospitalizationJpaRepository
                .findById(hospitalizationId).orElseThrow(() -> new EntityNotFoundException("Hospitalization not found with id: " + hospitalizationId));

        patientHospitalizationEntity.setDateTo(LocalDate.now());
        patientHospitalizationJpaRepository.save(patientHospitalizationEntity);
    }
}
