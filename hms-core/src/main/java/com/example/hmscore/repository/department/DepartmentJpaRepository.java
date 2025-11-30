package com.example.hmscore.repository.department;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentJpaRepository  extends JpaRepository<DepartmentEntity, Long> {
}
