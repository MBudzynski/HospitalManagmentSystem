package com.example.hmscore.ddd.organization.infrastructure.jpa.bed;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
interface BedJpaRepository  extends JpaRepository<BedEntity, Long> {
}
