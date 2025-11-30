package com.example.hmscore.ui;

import com.example.hmscore.services.DocumentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/patient/document")
@RequiredArgsConstructor
public class DocumentController {

    private final DocumentService documentService;
}
