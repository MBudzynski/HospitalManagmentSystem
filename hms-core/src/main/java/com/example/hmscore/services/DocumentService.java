package com.example.hmscore.services;

import com.example.hmscore.repository.document.DocumentJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DocumentService {

    private final DocumentJpaRepository documentJpaRepository;
}
