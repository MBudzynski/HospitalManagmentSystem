package com.example.hmscore.ddd.organization.infrastructure.jpa.department;

import com.example.hmscore.ddd.organization.infrastructure.jpa.room.RoomEntity;
import com.example.hmscore.ddd.staff.infrastructure.jpa.staff.StaffEntity;
import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Table(name = "department")
public class DepartmentEntity {

    @Id
    @Column(name = "department_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long departmentId;
    private String departmentName;
    private String departmentCode;
    private String headOfDepartment;
    private String deputyHeadOfDepartment;
    private String staffsPhoneNumber;
    private String nursesPhoneNumber;
    private String headPhoneNumber;

    @OneToMany(mappedBy = "department", cascade = CascadeType.ALL)
    private List<RoomEntity> rooms = new ArrayList<>();

    @OneToMany(mappedBy = "department", cascade = CascadeType.ALL)
    private List<StaffEntity> staffs = new ArrayList<>();
}
