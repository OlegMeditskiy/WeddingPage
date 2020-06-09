package weddingsitebackend.weddingsitebackend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import weddingsitebackend.weddingsitebackend.payload.requests.PersonalInvitationRequest;
import weddingsitebackend.weddingsitebackend.service.PersonalInvitationService;

import javax.validation.Valid;

@RequestMapping("/api/invitation")
@RestController
public class PersonalInvitationAcceptAndDeclineController {
    final PersonalInvitationService personalInvitationService;

    public PersonalInvitationAcceptAndDeclineController(PersonalInvitationService personalInvitationService) {
        this.personalInvitationService = personalInvitationService;
    }

    @PostMapping(value = "/accept")
     public ResponseEntity<?> accept(@Valid @RequestBody PersonalInvitationRequest personalInvitationRequest){
       return personalInvitationService.accept(personalInvitationRequest);
    }
    @PostMapping(value = "/decline")
    public ResponseEntity<?> decline(@Valid @RequestBody PersonalInvitationRequest personalInvitationRequest){
        return personalInvitationService.decline(personalInvitationRequest);
    }
}
