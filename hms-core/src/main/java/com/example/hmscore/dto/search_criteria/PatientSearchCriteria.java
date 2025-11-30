package com.example.hmscore.dto.search_criteria;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PatientSearchCriteria {

    private String name;
    private String surname;
    private String pesel;
    private String birthDate;
    private String email;
    private String phone;
}
