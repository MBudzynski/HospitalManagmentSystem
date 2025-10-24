package com.example.hmscore.ddd.patient.infrastructure.jpa.document;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DocumentJpaRepository extends JpaRepository<DocumentEntity, Long> {
}
