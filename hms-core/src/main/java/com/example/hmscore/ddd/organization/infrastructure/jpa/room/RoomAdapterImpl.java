package com.example.hmscore.ddd.organization.infrastructure.jpa.room;

import com.example.hmscore.ddd.organization.domain.RoomAdapter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
class RoomAdapterImpl implements RoomAdapter {

    private final RoomJpaRepository roomJpaRepository;
}
