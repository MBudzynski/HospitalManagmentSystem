package com.example.hmscore.repository.department;

import com.example.hmscore.dto.DepartmentDTO;
import com.example.hmscore.repository.room.RoomConfiguration;
import com.example.hmscore.repository.room.RoomEntity;
import com.example.hmscore.repository.staff.StaffConfiguration;
import com.example.hmscore.repository.staff.StaffEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Builder
@AllArgsConstructor
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

    public DepartmentDTO toDTO() {

        StaffConfiguration staffConfiguration = StaffConfiguration.builder().build();
        RoomConfiguration roomConfiguration = RoomConfiguration
                .builder()
                .withPatientHospitalizations(true)
                .build();

        return DepartmentDTO
                .builder()
                .departmentId(departmentId)
                .departmentName(departmentName)
                .departmentCode(departmentCode)
                .headOfDepartment(headOfDepartment)
                .deputyHeadOfDepartment(deputyHeadOfDepartment)
                .staffsPhoneNumber(staffsPhoneNumber)
                .nursesPhoneNumber(nursesPhoneNumber)
                .headPhoneNumber(headPhoneNumber)
                .staffs(staffs.stream().map(x -> x.toDTO(staffConfiguration)).toList())
                .rooms(rooms.stream().map(x-> x.toDTO(roomConfiguration)).toList())
                .build();
    }
}
