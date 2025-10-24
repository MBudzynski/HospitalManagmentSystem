package com.example.hmscore.ddd.organization.infrastructure.jpa.room;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
interface RoomJpaRepository  extends JpaRepository<RoomEntity, Long> {
}
