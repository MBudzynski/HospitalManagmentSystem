package com.example.hmscore.repository.drug;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TimeOfDayJpaRepository extends JpaRepository<TimeOfDayEntity, Long> {
}
