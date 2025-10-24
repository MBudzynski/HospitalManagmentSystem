package com.example.hmscore.ddd.organization.infrastructure.jpa.bed;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Table(name = "bed")
class BedEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bedId;
}
