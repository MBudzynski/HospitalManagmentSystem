package com.example.hmscore.repository.patient;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PatientHospitalizationJpaRepository extends JpaRepository<PatientHospitalizationEntity, Long> {

    @Query(value = """
        SELECT ph.* FROM patient_hospitalization ph 
        JOIN room r ON ph.room_id = r.room_id
        WHERE r.department_id = :departmentId AND
              ph.date_to IS NULL
        """, nativeQuery = true)
    List<PatientHospitalizationEntity> findHospitalizationByDepartmentId(Long departmentId);
}
