package com.example.hmscore.ddd.staff.application;

import com.example.hmscore.ddd.staff.domain.StaffAdapter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
class StaffService {

    private final StaffAdapter staffAdapter;
}
