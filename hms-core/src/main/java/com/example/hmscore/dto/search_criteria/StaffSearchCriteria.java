package com.example.hmscore.dto.search_criteria;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class StaffSearchCriteria {

    private String name;
    private String surname;
    private String specialization;
    private String peselNumber;
    private Boolean assignToDepartment;
}
