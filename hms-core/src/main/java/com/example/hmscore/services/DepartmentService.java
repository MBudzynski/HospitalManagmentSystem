package com.example.hmscore.services;

import com.example.hmscore.dto.DepartmentDTO;
import com.example.hmscore.repository.department.DepartmentEntity;
import com.example.hmscore.repository.department.DepartmentJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DepartmentService {

    private final DepartmentJpaRepository departmentJpaRepository;

    public List<DepartmentDTO> getAllDepartments() {
        return departmentJpaRepository
                .findAll()
                .stream()
                .map(DepartmentEntity::toDTO)
                .toList();
    }

    public DepartmentDTO getDepartmentById(Long departmentId) {
        DepartmentEntity entity = departmentJpaRepository.findById(departmentId)
                .orElseThrow(() -> new RuntimeException("Department not found"));

        return entity.toDTO();
    }
}
