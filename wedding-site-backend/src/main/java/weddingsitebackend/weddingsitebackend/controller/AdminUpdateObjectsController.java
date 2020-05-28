package weddingsitebackend.weddingsitebackend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import weddingsitebackend.weddingsitebackend.payload.siteObjects.*;
import weddingsitebackend.weddingsitebackend.sevice.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/admin/update")
public class AdminUpdateObjectsController {

    final AboutUsService aboutUsService;

    final DressCodeService dressCodeService;

    final InvitaitionTextService invitaitionTextService;

    final PersonalInvitationService personalInvitationService;

    final PlaceService placeService;

    final ProgramService programService;

    final StoryService storyService;

    final WeddingDateService weddingDateService;

    public AdminUpdateObjectsController(AboutUsService aboutUsService, DressCodeService dressCodeService, InvitaitionTextService invitaitionTextService, PersonalInvitationService personalInvitationService, PlaceService placeService, ProgramService programService, StoryService storyService, WeddingDateService weddingDateService) {
        this.aboutUsService = aboutUsService;
        this.dressCodeService = dressCodeService;
        this.invitaitionTextService = invitaitionTextService;
        this.personalInvitationService = personalInvitationService;
        this.placeService = placeService;
        this.programService = programService;
        this.storyService = storyService;
        this.weddingDateService = weddingDateService;
    }

    @PostMapping("/aboutUs")
    public ResponseEntity<?> updateAboutUs(@Valid @RequestBody AboutUsRequest aboutUsRequest) {
        return aboutUsService.update(aboutUsRequest);
    }
    @PostMapping("/dressCode")
    public ResponseEntity<?> updateDressCode(@Valid @RequestBody DressCodeRequest dressCodeRequest) {
        return dressCodeService.update(dressCodeRequest);
    }
    @PostMapping("/invitationText")
    public ResponseEntity<?> updateInvitationText(@Valid @RequestBody InvitationTextRequest invitationTextRequest) {
        return invitaitionTextService.update(invitationTextRequest);
    }
    @PostMapping("/personalInvitation")
    public ResponseEntity<?> updatePersonalInvitation(@Valid @RequestBody PersonalInvitationRequest personalInvitationRequest) {
        return personalInvitationService.update(personalInvitationRequest);
    }
    @PostMapping("/place")
    public ResponseEntity<?> updatePlace(@Valid @RequestBody PlaceRequest placeRequest) {
        return placeService.update(placeRequest);
    }
    
    @PostMapping("/story")
    public ResponseEntity<?> updateStory(@Valid @RequestBody StoryRequest storyRequest) {
        return storyService.update(storyRequest);
    }
    @PostMapping("/weddingDate")
    public ResponseEntity<?> updateStory(@Valid @RequestBody WeddingDateRequest weddingDateRequest) {
        return weddingDateService.update(weddingDateRequest);
    }
}
