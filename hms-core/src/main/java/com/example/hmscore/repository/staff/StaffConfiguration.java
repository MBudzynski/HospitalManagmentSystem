package com.example.hmscore.repository.staff;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StaffConfiguration {

    private boolean withMedicalHistories;
    private boolean withDepartments;

}
