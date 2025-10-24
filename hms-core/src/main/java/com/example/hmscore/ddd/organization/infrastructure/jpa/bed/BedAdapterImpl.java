package com.example.hmscore.ddd.organization.infrastructure.jpa.bed;

import com.example.hmscore.ddd.organization.domain.BedAdapter;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@AllArgsConstructor
class BedAdapterImpl implements BedAdapter {

    private final BedJpaRepository bedJpaRepository;
}
