package com.example.hmscore.ddd.staff.application;

import com.example.hmscore.common.staff.StaffFacade;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
class StaffFacadeImpl implements StaffFacade {

    private final StaffService staffService;
}
