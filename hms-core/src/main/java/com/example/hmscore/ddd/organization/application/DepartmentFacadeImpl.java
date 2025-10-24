package com.example.hmscore.ddd.organization.application;

import com.example.hmscore.common.organization.DepartmentFacade;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
class DepartmentFacadeImpl implements DepartmentFacade {

    private final DepartmentService departmentService;
}
