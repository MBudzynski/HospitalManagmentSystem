package com.example.hmscore.ui;

import com.example.hmscore.services.RoomService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/department/room")
@RequiredArgsConstructor
public class RoomController {

    private final RoomService roomService;
}
