package com.example.hmscore.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DrugQuantityDTO {

    private Long drugQuantityId;
    private String description;
}
