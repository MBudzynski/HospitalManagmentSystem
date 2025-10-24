package com.example.hmscore.ddd.organization.application;

import com.example.hmscore.ddd.organization.domain.BedAdapter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
class BedService {

    private final BedAdapter bedAdapter;
}
