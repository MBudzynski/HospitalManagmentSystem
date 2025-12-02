package com.example.hmscore.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DrugDTO {

    private Long drugId;
    private String name;
    private String activeIngredient;
    private String dosage;
    private String dosageForm;
    private String quantity;
}
