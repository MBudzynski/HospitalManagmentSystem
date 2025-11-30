package com.example.hmscore.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StaffDTO {

    private Long staffId;
    private String name;
    private String surname;
    private String peselNumber;
    private String title;
    private String specialization;
    private String phoneNumber;
    private String email;
    private String professionalLicenseNumber;
    private DepartmentDTO department;
    private List<MedicalHistoryDTO> medicalHistory;
}
