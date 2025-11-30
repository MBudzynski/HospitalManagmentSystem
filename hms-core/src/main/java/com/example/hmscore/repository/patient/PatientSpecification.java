package com.example.hmscore.repository.patient;

import com.example.hmscore.dto.search_criteria.PatientSearchCriteria;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;
import java.util.ArrayList;
import java.util.List;

public class PatientSpecification {

    public static Specification<PatientEntity> search(PatientSearchCriteria criteria) {
        return (root, query, criteriaBuilder) -> {

            List<Predicate> predicates = new ArrayList<>();

            if (criteria.getName() != null && !criteria.getName().isEmpty()) {
                predicates.add(criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("name")),
                        "%" + criteria.getName().toLowerCase() + "%"
                ));
            }

            if (criteria.getSurname() != null && !criteria.getSurname().isEmpty()) {
                predicates.add(criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("surname")),
                        "%" + criteria.getSurname().toLowerCase() + "%"
                ));
            }

            if (criteria.getPesel() != null && !criteria.getPesel().isEmpty()) {
                predicates.add(criteriaBuilder.equal(root.get("pesel"), criteria.getPesel()));
            }

            if (criteria.getBirthDate() != null && !criteria.getBirthDate().isEmpty()) {
                predicates.add(criteriaBuilder.equal(root.get("birthDate"), criteria.getBirthDate()));
            }

            if (criteria.getEmail() != null && !criteria.getEmail().isEmpty()) {
                predicates.add(criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("email")),
                        "%" + criteria.getEmail().toLowerCase() + "%"
                ));
            }

            if (criteria.getPhone() != null && !criteria.getPhone().isEmpty()) {
                predicates.add(criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("phone")),
                        "%" + criteria.getPhone().toLowerCase() + "%"
                ));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }
}