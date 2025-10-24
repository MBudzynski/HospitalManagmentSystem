package com.example.hmscore.ddd.organization.application;

import com.example.hmscore.common.organization.RoomFacade;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
class RoomFacadeImpl implements RoomFacade {

    private final RoomService roomService;
}
