package com.example.hmscore.ui.resposne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StaffDepartmentRequest {
    private Long staffId;
    private Long departmentId;
}
