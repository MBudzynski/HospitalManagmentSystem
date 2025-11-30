package com.example.hmscore.ui;

import com.example.hmscore.dto.PatientDTO;
import com.example.hmscore.dto.search_criteria.PatientSearchCriteria;
import com.example.hmscore.services.PatientService;
import com.example.hmscore.ui.resposne.PatientsResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/patient")
@RequiredArgsConstructor
public class PatientController {

    private final PatientService patientService;

    @GetMapping
    public PatientsResponse addPatient() {
        return PatientsResponse
                .builder()
                .patients(patientService.findAllPatients())
                .build();
    }

    @PostMapping
    public PatientDTO addPatient(@RequestBody PatientDTO dto) {
        return patientService.addPatient(dto);
    }

    @PostMapping("/search")
    public PatientsResponse searchPatients(@RequestBody PatientSearchCriteria criteria) {
        return PatientsResponse
                .builder()
                .patients(patientService.searchPatients(criteria))
                .build();
    }

    @DeleteMapping("/{patientId}")
    public void deletePatient(@PathVariable Long patientId) {
        patientService.deletePatient(patientId);
    }
}
