package weddingsitebackend.weddingsitebackend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import weddingsitebackend.weddingsitebackend.payload.requests.PersonalInvitationRequest;
import weddingsitebackend.weddingsitebackend.payload.requests.ProgramsPartRequest;
import weddingsitebackend.weddingsitebackend.sevice.PersonalInvitationService;
import weddingsitebackend.weddingsitebackend.sevice.ProgramsPartService;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/admin/delete")
public class AdminDeleteObjectsController {
    final ProgramsPartService programsPartService;
    final PersonalInvitationService personalInvitationService;

    public AdminDeleteObjectsController(ProgramsPartService programsPartService, PersonalInvitationService personalInvitationService) {
        this.programsPartService = programsPartService;
        this.personalInvitationService = personalInvitationService;
    }

    @DeleteMapping(value = "/programsPart")
    public ResponseEntity<?> delete(@Valid @RequestBody ProgramsPartRequest programsPartRequest) {
        return programsPartService.delete(programsPartRequest);
    }

    @DeleteMapping(value = "/personalInvitation")
    public ResponseEntity<?> delete(@Valid @RequestBody PersonalInvitationRequest personalInvitationRequest) {
        return personalInvitationService.delete(personalInvitationRequest);
    }
}
