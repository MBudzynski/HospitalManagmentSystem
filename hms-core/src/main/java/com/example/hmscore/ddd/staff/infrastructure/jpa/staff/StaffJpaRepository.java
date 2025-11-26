package com.example.hmscore.ddd.staff.infrastructure.jpa.staff;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
interface StaffJpaRepository extends JpaRepository<StaffEntity, Long> {
}
