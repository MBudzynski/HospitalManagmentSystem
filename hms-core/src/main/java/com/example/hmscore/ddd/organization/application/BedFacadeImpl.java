package com.example.hmscore.ddd.organization.application;

import com.example.hmscore.common.organization.BedFacade;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
class BedFacadeImpl implements BedFacade {

    private final BedService bedService;
}
