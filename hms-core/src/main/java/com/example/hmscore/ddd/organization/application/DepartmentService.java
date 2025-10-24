package com.example.hmscore.ddd.organization.application;

import com.example.hmscore.ddd.organization.domain.DepartmentAdapter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
class DepartmentService {

    private final DepartmentAdapter departmentAdapter;
}
