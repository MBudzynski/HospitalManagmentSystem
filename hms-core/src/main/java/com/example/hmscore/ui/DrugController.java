package com.example.hmscore.ui;

import com.example.hmscore.dto.DrugDTO;
import com.example.hmscore.dto.DrugQuantityDTO;
import com.example.hmscore.dto.TimeOfDayDTO;
import com.example.hmscore.dto.search_criteria.DrugSearchCriteria;
import com.example.hmscore.services.DrugService;
import com.example.hmscore.ui.resposne.DrugsResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/drug")
@RequiredArgsConstructor
public class DrugController {

    private final DrugService drugService;

    @GetMapping
    public DrugsResponse getAllDrugs() {
        return DrugsResponse
                .builder()
                .drugs(drugService.findAll())
                .build();
    }

    @PostMapping("/search")
    public DrugsResponse searchDrugs(@RequestBody DrugSearchCriteria criteria) {
        return DrugsResponse
                .builder()
                .drugs(drugService.search(criteria))
                .build();
    }

    @PostMapping
    public DrugDTO saveDrug(@RequestBody DrugDTO dto) {
        return drugService.save(dto);
    }

    @DeleteMapping("/{id}")
    public void deleteDrug(@PathVariable Long id) {
        drugService.delete(id);
    }

    @GetMapping("/time")
    public List<TimeOfDayDTO> findAllTimeOfDay() {
        return drugService.findAllTimeOfDay();
    }

    @GetMapping("/quantity")
    public List<DrugQuantityDTO> findAllDrugQuantity() {
        return drugService.findAllDrugQuantity();
    }
}
