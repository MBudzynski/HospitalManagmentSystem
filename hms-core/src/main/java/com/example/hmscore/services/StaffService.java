package com.example.hmscore.services;

import com.example.hmscore.dto.StaffDTO;
import com.example.hmscore.dto.search_criteria.StaffSearchCriteria;
import com.example.hmscore.repository.department.DepartmentEntity;
import com.example.hmscore.repository.staff.StaffConfiguration;
import com.example.hmscore.repository.staff.StaffEntity;
import com.example.hmscore.repository.staff.StaffJpaRepository;
import com.example.hmscore.repository.staff.StaffSpecification;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StaffService {

    private final StaffJpaRepository staffJpaRepository;

    public List<StaffDTO> searchStaff(StaffSearchCriteria request) {
        StaffConfiguration config = StaffConfiguration.builder()
                .withDepartments(true)
                .withMedicalHistories(false)
                .build();

        return staffJpaRepository.findAll(StaffSpecification.search(request))
                .stream()
                .map(x -> x.toDTO(config))
                .toList();
    }

    @Transactional
    public void assignStaffToDepartment(Long staffId, Long departmentId) {
        StaffEntity staff = staffJpaRepository.findById(staffId)
                .orElseThrow(() -> new RuntimeException("Nie znaleziono pracownika"));

        staff.setDepartment(DepartmentEntity
                .builder()
                .departmentId(departmentId)
                .build());
        staffJpaRepository.save(staff);
    }

    @Transactional
    public void removeStaffFromDepartment(Long staffId) {
        StaffEntity staff = staffJpaRepository.findById(staffId)
                .orElseThrow(() -> new RuntimeException("Nie znaleziono pracownika"));
        staff.setDepartment(null);
        staffJpaRepository.save(staff);
    }

    public StaffDTO addStaff(StaffDTO dto) {
        return staffJpaRepository.save(StaffEntity.toEntity(dto)).toDTO(StaffConfiguration.builder().build());
    }

    public void deleteStaff(Long staffId) {
        StaffEntity staffEntity = staffJpaRepository.findById(staffId)
                .orElseThrow(() -> new RuntimeException("Nie znaleziono pracownika"));

        if(staffEntity.getDepartment() != null || (staffEntity.getMedicalHistories() != null && !staffEntity.getMedicalHistories().isEmpty())) {
            throw new RuntimeException("Pracownik jest przypisany do działu lub jest autorem dokumentacji medycznej");
        }

        staffJpaRepository.delete(staffEntity);
    }

    public List<StaffDTO> getAllStaffs() {
        StaffConfiguration config = StaffConfiguration.builder().build();
        return staffJpaRepository
                .findAll()
                .stream()
                .map(x->x.toDTO(config))
                .toList();
    }
}
