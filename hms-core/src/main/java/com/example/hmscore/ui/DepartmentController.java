package com.example.hmscore.ui;

import com.example.hmscore.dto.DepartmentDTO;
import com.example.hmscore.services.DepartmentService;
import com.example.hmscore.ui.resposne.DepartmentsResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/department")
@RequiredArgsConstructor
public class DepartmentController {

    private final DepartmentService departmentService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    DepartmentsResponse getAllDepartments() {

        log.info("getAllDepartments");
        return DepartmentsResponse
                .builder()
                .departments(departmentService.getAllDepartments())
                .build();
    }

    @GetMapping("/{departmentId}")
    @ResponseStatus(HttpStatus.OK)
    public DepartmentDTO getDepartmentById(@PathVariable Long departmentId) {
        return departmentService.getDepartmentById(departmentId);
    }
}
