package com.example.hmscore.ddd.organization.ui.rest;

import com.example.hmscore.common.organization.RoomFacade;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/department/room")
@RequiredArgsConstructor
public class RoomController {

    private final RoomFacade roomFacade;
}
