package com.example.hmscore.ddd.patient.ui.rest;

import com.example.hmscore.common.patient.MedicalHistoryFacade;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/patient/medical-history")
@RequiredArgsConstructor
public class MedicalHistoryController {

    private final MedicalHistoryFacade medicalHistoryFacade;
}
