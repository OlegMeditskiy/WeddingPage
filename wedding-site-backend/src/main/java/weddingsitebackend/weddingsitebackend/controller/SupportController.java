package weddingsitebackend.weddingsitebackend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import weddingsitebackend.weddingsitebackend.payload.requests.SupportRequest;
import weddingsitebackend.weddingsitebackend.service.SupportMailService;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/support")
public class SupportController {
    final SupportMailService supportMailService;

    public SupportController(SupportMailService supportMailService) {
        this.supportMailService = supportMailService;
    }

    @PostMapping("/sendMailToSupport")
    public ResponseEntity<?> sendMailToMember(@Valid @RequestBody SupportRequest supportRequest) {
        return supportMailService.sendMailToSupport(supportRequest);
    }
}
