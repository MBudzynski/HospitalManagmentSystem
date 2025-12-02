package com.example.hmscore.ui;

import com.example.hmscore.dto.MedicalHistoryDTO;
import com.example.hmscore.services.MedicalHistoryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/hospitalization/medical-history")
@RequiredArgsConstructor
public class MedicalHistoryController {

    private final MedicalHistoryService medicalHistoryService;

    @PostMapping("{hospitalizationId}")
    public void addHistory(@PathVariable Long hospitalizationId, @RequestBody MedicalHistoryDTO dto) {
        medicalHistoryService.saveMedicalHistory(hospitalizationId, dto);
    }
}
