package com.example.hmscore.ddd.patient.infrastructure.jpa.medical_history;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicalHistoryJpaRepository extends JpaRepository<MedicalHistoryEntity, Long> {
}
