package com.example.hmscore.repository.staff;

import com.example.hmscore.dto.search_criteria.StaffSearchCriteria;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

public class StaffSpecification {

    public static Specification<StaffEntity> search(StaffSearchCriteria criteria) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (criteria.getName() != null && !criteria.getName().isEmpty()) {
                predicates.add(criteriaBuilder.like(criteriaBuilder.lower(root.get("name")), "%" + criteria.getName().toLowerCase() + "%"));
            }

            if (criteria.getSurname() != null && !criteria.getSurname().isEmpty()) {
                predicates.add(criteriaBuilder.like(criteriaBuilder.lower(root.get("surname")), "%" + criteria.getSurname().toLowerCase() + "%"));
            }

            if (criteria.getSpecialization() != null && !criteria.getSpecialization().isEmpty()) {
                predicates.add(criteriaBuilder.like(criteriaBuilder.lower(root.get("specialization")), "%" + criteria.getSpecialization().toLowerCase() + "%"));
            }

            if (criteria.getPeselNumber() != null && !criteria.getPeselNumber().isEmpty()) {
                predicates.add(criteriaBuilder.equal(root.get("peselNumber"), criteria.getPeselNumber()));
            }

            if (criteria.getAssignToDepartment() != null) {
                if (criteria.getAssignToDepartment()) {
                    predicates.add(criteriaBuilder.isNotNull(root.get("department")));
                } else {
                    predicates.add(criteriaBuilder.isNull(root.get("department")));
                }
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }
}