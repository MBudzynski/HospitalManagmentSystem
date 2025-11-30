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
public class RoomDTO {

    private Long roomId;
    private String number;
    private Integer floor;
    private String bedNumber;
    private DepartmentDTO department;
    private List<PatientHospitalizationDTO> hospitalizations;
}
