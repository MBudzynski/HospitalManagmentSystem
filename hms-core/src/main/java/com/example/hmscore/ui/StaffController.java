package com.example.hmscore.ui;

import com.example.hmscore.dto.StaffDTO;
import com.example.hmscore.dto.search_criteria.StaffSearchCriteria;
import com.example.hmscore.services.StaffService;
import com.example.hmscore.ui.resposne.StaffDepartmentRequest;
import com.example.hmscore.ui.resposne.StaffSearchResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/staff")
@RequiredArgsConstructor
public class StaffController {

    private final StaffService staffService;

    @PostMapping("/search")
    @ResponseStatus(HttpStatus.OK)
    public StaffSearchResponse searchStaff(@RequestBody StaffSearchCriteria request) {
        return StaffSearchResponse.builder()
                .staffs(staffService.searchStaff(request))
                .build();
    }

    @PostMapping("/department/assign")
    @ResponseStatus(HttpStatus.OK)
    public void assignStaffToDepartment(@RequestBody StaffDepartmentRequest request) {
        staffService.assignStaffToDepartment(request.getStaffId(), request.getDepartmentId());
    }

    @PostMapping("/department/remove")
    @ResponseStatus(HttpStatus.OK)
    public void removeStaffFromDepartment(@RequestBody StaffDepartmentRequest request) {
        staffService.removeStaffFromDepartment(request.getStaffId());
    }

    @GetMapping
    public StaffSearchResponse getAllStaffs() {
        return StaffSearchResponse
                .builder()
                .staffs(staffService.getAllStaffs())
                .build();
    }

    @PostMapping
    public ResponseEntity<StaffDTO> addStaff(@RequestBody StaffDTO dto) {
        StaffDTO saved = staffService.addStaff(dto);
        return ResponseEntity.ok(saved);
    }

    @DeleteMapping("/{staffId}")
    public ResponseEntity<String> deleteStaff(@PathVariable Long staffId) {
        staffService.deleteStaff(staffId);
        return ResponseEntity.ok("Pracownik został usunięty");
    }
}
