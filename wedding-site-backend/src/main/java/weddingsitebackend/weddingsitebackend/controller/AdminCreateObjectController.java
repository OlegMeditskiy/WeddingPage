package weddingsitebackend.weddingsitebackend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import weddingsitebackend.weddingsitebackend.payload.requests.PersonalInvitationRequest;
import weddingsitebackend.weddingsitebackend.payload.requests.ProgramsPartRequest;
import weddingsitebackend.weddingsitebackend.sevice.PersonalInvitationService;
import weddingsitebackend.weddingsitebackend.sevice.ProgramsPartService;

import javax.validation.Valid;


@RestController
@RequestMapping("/api/admin/create")
public class AdminCreateObjectController {
    final ProgramsPartService programsPartService;
    final PersonalInvitationService personalInvitationService;

    public AdminCreateObjectController(ProgramsPartService programsPartService, PersonalInvitationService personalInvitationService) {
        this.programsPartService = programsPartService;
        this.personalInvitationService = personalInvitationService;
    }

    @PostMapping(value = "/programsPart")
    public ResponseEntity<?> createProgramsPart(@Valid @RequestBody ProgramsPartRequest programsPartRequest) {

        return programsPartService.create(programsPartRequest);
    }

    @PostMapping(value = "/personalInvitation")
    public ResponseEntity<?> createPersonalInvitation(@Valid @RequestBody PersonalInvitationRequest personalInvitationRequest) {
        return personalInvitationService.create(personalInvitationRequest);
    }
}
