package com.example.hmscore.services;

import com.example.hmscore.dto.DrugDTO;
import com.example.hmscore.dto.DrugQuantityDTO;
import com.example.hmscore.dto.TimeOfDayDTO;
import com.example.hmscore.dto.search_criteria.DrugSearchCriteria;
import com.example.hmscore.repository.drug.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DrugService {

    private final DrugJpaRepository drugJpaRepository;
    private final TimeOfDayJpaRepository timeOfDayJpaRepository;
    private final DrugQuantityJpaRepository drugQuantityJpaRepository;

    public List<DrugDTO> findAll() {
        return drugJpaRepository.findAll().stream()
                .map(DrugEntity::toDTO)
                .toList();
    }

    public List<DrugDTO> search(DrugSearchCriteria criteria) {
        return drugJpaRepository.findAll(DrugSpecification.search(criteria)).stream()
                .map(DrugEntity::toDTO)
                .toList();
    }

    public DrugDTO save(DrugDTO dto) {
        return drugJpaRepository.save(DrugEntity.fromDTO(dto)).toDTO();
    }

    public void delete(Long drugId) {
        DrugEntity drug = drugJpaRepository.findById(drugId)
                .orElseThrow(() -> new RuntimeException("Drug not found"));

        drugJpaRepository.delete(drug);
    }

    public List<TimeOfDayDTO> findAllTimeOfDay() {
        return timeOfDayJpaRepository
                .findAll()
                .stream()
                .map(TimeOfDayEntity::toDTO)
                .toList();
    }

    public List<DrugQuantityDTO> findAllDrugQuantity() {
        return drugQuantityJpaRepository
                .findAll()
                .stream()
                .map(DrugQuantityEntity::toDTO)
                .toList();
    }
}
