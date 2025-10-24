package com.example.hmscore.ddd.organization.infrastructure.jpa.department;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
interface DepartmentJpaRepository  extends JpaRepository<DepartmentEntity, Long> {
}
