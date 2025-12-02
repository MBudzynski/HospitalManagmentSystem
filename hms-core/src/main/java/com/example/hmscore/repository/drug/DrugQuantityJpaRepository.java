package com.example.hmscore.repository.drug;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DrugQuantityJpaRepository extends JpaRepository<DrugQuantityEntity, Long> {
}
