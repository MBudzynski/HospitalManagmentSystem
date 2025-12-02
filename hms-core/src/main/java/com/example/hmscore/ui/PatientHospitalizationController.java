package com.example.hmscore.ui;

import com.example.hmscore.dto.HospitalizationDrugDTO;
import com.example.hmscore.dto.PatientHospitalizationDTO;
import com.example.hmscore.services.PatientHospitalizationService;
import com.example.hmscore.ui.resposne.PatientHospitalizationsResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/hospitalizations")
@RequiredArgsConstructor
public class PatientHospitalizationController {

    private final PatientHospitalizationService patientHospitalizationService;

    @GetMapping("/department/{departmentId}")
    public PatientHospitalizationsResponse findHospitalizationsByResponse(@PathVariable Long departmentId) {
        return PatientHospitalizationsResponse
                .builder()
                .hospitalizations(patientHospitalizationService.findHospitalizationByDepartmentId(departmentId))
                .build();
    }

    @GetMapping("/{patientHospitalizationId}")
    public PatientHospitalizationDTO findHospitalizationsById(@PathVariable Long patientHospitalizationId) {
        return patientHospitalizationService.findpatientHospitalization(patientHospitalizationId);
    }

    @PostMapping("/drug/{patientHospitalizationId}")
    public void addDrugToHospitalization(@PathVariable Long patientHospitalizationId,
                                         @RequestBody HospitalizationDrugDTO dto) {
        patientHospitalizationService.saveDrugToHospitalization(patientHospitalizationId, dto);
    }

    @PutMapping("/finish/{id}")
    public void finishHospitalization(@PathVariable("id") Long hospitalizationId) {
        patientHospitalizationService.finishHospitalization(hospitalizationId);

    }
}
