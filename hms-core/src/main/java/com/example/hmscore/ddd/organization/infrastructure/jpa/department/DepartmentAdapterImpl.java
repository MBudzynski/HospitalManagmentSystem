package com.example.hmscore.ddd.organization.infrastructure.jpa.department;

import com.example.hmscore.ddd.organization.domain.DepartmentAdapter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
class DepartmentAdapterImpl implements DepartmentAdapter {

    private final DepartmentJpaRepository departmentJpaRepository;
}
