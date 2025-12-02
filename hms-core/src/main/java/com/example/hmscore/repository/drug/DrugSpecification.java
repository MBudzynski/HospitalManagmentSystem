package com.example.hmscore.repository.drug;

import com.example.hmscore.dto.search_criteria.DrugSearchCriteria;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;


public class DrugSpecification {

    public static Specification<DrugEntity> search(DrugSearchCriteria criteria) {
        return (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (criteria.getName() != null && !criteria.getName().isEmpty()) {
                predicates.add(cb.like(cb.lower(root.get("name")),
                        "%" + criteria.getName().toLowerCase() + "%"));
            }

            if (criteria.getActiveIngredient() != null && !criteria.getActiveIngredient().isEmpty()) {
                predicates.add(cb.like(cb.lower(root.get("activeIngredient")),
                        "%" + criteria.getActiveIngredient().toLowerCase() + "%"));
            }

            return cb.and(predicates.toArray(new Predicate[0]));
        };
    }
}
