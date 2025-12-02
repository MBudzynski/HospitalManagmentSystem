package com.example.hmscore.dto.search_criteria;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DrugSearchCriteria {

    private String name;
    private String activeIngredient;
}
