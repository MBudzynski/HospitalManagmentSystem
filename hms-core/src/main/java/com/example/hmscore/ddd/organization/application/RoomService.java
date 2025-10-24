package com.example.hmscore.ddd.organization.application;

import com.example.hmscore.ddd.organization.domain.RoomAdapter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
class RoomService {

    private final RoomAdapter roomAdapter;
}
