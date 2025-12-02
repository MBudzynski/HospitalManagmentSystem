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
public class HospitalizationDrugDTO {

    private Long hospitalizationDrugId;
    private LocalDate fromDate;
    private LocalDate toDate;
    private DrugDTO drug;
    private TimeOfDayDTO timeOfDay;
    private DrugQuantityDTO drugQuantity;
}
