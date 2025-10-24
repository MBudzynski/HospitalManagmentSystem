package com.example.hmscore.ddd.organization.ui.rest;

import com.example.hmscore.common.organization.BedFacade;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/department/room/bed")
@RequiredArgsConstructor
public class BedController {

    private final BedFacade bedFacade;
}
