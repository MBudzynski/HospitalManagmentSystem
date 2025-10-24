package com.example.hmscore.ddd.staff.infrastructure.jpa;

import com.example.hmscore.ddd.staff.domain.StaffAdapter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
class StaffAdapterImpl implements StaffAdapter {

    private final StaffJpaRepository staffJpaRepository;
}
