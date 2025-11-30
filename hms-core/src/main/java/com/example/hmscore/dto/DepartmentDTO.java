package com.example.hmscore.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DepartmentDTO {

    private Long departmentId;
    private String departmentName;
    private String departmentCode;
    private String headOfDepartment;
    private String deputyHeadOfDepartment;
    private String staffsPhoneNumber;
    private String nursesPhoneNumber;
    private String headPhoneNumber;

    @Builder.Default
    private List<RoomDTO> rooms = new ArrayList<>();
    @Builder.Default
    private List<StaffDTO> staffs = new ArrayList<>();
}
