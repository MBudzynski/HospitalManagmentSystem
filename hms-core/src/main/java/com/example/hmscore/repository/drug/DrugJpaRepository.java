package com.example.hmscore.repository.drug;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface DrugJpaRepository extends JpaRepository<DrugEntity, Long>, JpaSpecificationExecutor<DrugEntity> {
}
