package com.example.hmscore.ddd.staff.infrastructure.jpa.staff;

import com.example.hmscore.ddd.organization.infrastructure.jpa.department.DepartmentEntity;
import com.example.hmscore.ddd.patient.infrastructure.jpa.medical_history.MedicalHistoryEntity;
import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
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
}
