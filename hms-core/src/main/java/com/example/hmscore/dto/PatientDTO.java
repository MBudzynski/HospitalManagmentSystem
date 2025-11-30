package com.example.hmscore.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PatientDTO {

    private Long patientId;
    private String name;
    private String surname;
    private String pesel;
    private LocalDate birthDate;
    private String gender;
    private String phone;
    private String email;
    private String street;
    private String city;
    private String houseNumber;
    private String postalCode;
}
