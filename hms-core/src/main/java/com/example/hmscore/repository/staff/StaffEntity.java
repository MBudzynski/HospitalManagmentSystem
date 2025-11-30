package com.example.hmscore.repository.staff;

import com.example.hmscore.dto.StaffDTO;
import com.example.hmscore.repository.medical_history.MedicalHistoryEntity;
import com.example.hmscore.repository.department.DepartmentEntity;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Builder
@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "staff")
public class StaffEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long staffId;
    private String name;
    private String surname;
    private String peselNumber;
    private String title;
    private String specialization;
    private String phoneNumber;
    private String email;
    private String professionalLicenseNumber;

    @OneToMany(mappedBy = "staff", cascade = CascadeType.ALL)
    private List<MedicalHistoryEntity> medicalHistories = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "department_id")
    private DepartmentEntity department;

    public StaffDTO toDTO(StaffConfiguration configuration) {
        return StaffDTO
                .builder()
                .staffId(staffId)
                .name(name)
                .surname(surname)
                .peselNumber(peselNumber)
                .title(title)
                .specialization(specialization)
                .phoneNumber(phoneNumber)
                .email(email)
                .professionalLicenseNumber(professionalLicenseNumber)
                .medicalHistory(configuration.isWithMedicalHistories() ? medicalHistories.stream().map(MedicalHistoryEntity::toDTO).toList() : null)
                .department(configuration.isWithDepartments() && department != null ? department.toDTO() : null)
                .build();
    }

    public static StaffEntity toEntity(StaffDTO dto) {
        return StaffEntity
                .builder()
                .staffId(dto.getStaffId())
                .name(dto.getName())
                .surname(dto.getSurname())
                .peselNumber(dto.getPeselNumber())
                .title(dto.getTitle())
                .specialization(dto.getSpecialization())
                .phoneNumber(dto.getPhoneNumber())
                .email(dto.getEmail())
                .professionalLicenseNumber(dto.getProfessionalLicenseNumber())
                .build();
    }
}
