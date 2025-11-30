package com.example.hmscore.repository.staff;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface StaffJpaRepository extends JpaRepository<StaffEntity, Long>, JpaSpecificationExecutor<StaffEntity> {


}
