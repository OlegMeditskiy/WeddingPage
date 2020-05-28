package weddingsitebackend.weddingsitebackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import weddingsitebackend.weddingsitebackend.payload.siteObjects.*;
import weddingsitebackend.weddingsitebackend.sevice.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/get")
public class AdminGetObjectsController {

    final AboutUsService aboutUsService;

    final DressCodeService dressCodeService;

    final InvitaitionTextService invitaitionTextService;

    final PersonalInvitationService personalInvitationService;

    final PlaceService placeService;

    final ProgramService programService;

    final StoryService storyService;

    final WeddingDateService weddingDateService;

    public AdminGetObjectsController(AboutUsService aboutUsService, DressCodeService dressCodeService, InvitaitionTextService invitaitionTextService, PersonalInvitationService personalInvitationService, PlaceService placeService, ProgramService programService, StoryService storyService, WeddingDateService weddingDateService) {
        this.aboutUsService = aboutUsService;
        this.dressCodeService = dressCodeService;
        this.invitaitionTextService = invitaitionTextService;
        this.personalInvitationService = personalInvitationService;
        this.placeService = placeService;
        this.programService = programService;
        this.storyService = storyService;
        this.weddingDateService = weddingDateService;
    }

    @GetMapping(value = "/aboutUs")
    public List<AboutUsResponse> getAllAboutUs() {
        return aboutUsService.getAllAboutUs();
    }
    @GetMapping(value = "/dressCode")
    public DressCodeResponse getDressCode() {
        return dressCodeService.getDressCode();
    }
    @GetMapping(value = "/invitationText")
    public InvitationTextResponse getInvitationText() {
        return invitaitionTextService.getInvitationText();
    }
    @GetMapping(value = "/place")
    public PlaceResponse getPlace() {
        return placeService.getPlace();
    }
    @GetMapping(value = "/story")
    public StoryResponse getStory() {
        return storyService.getStory();
    }
    @GetMapping(value = "/weddingDate")
    public WeddingDateResponse getWeddingDate() {
        return weddingDateService.getWeddingDate();
    }
}
