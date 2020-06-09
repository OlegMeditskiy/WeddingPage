package weddingsitebackend.weddingsitebackend.controller;

import org.springframework.web.bind.annotation.*;
import weddingsitebackend.weddingsitebackend.payload.requests.PersonalInvitationRequest;
import weddingsitebackend.weddingsitebackend.payload.responses.*;
import weddingsitebackend.weddingsitebackend.service.*;

import javax.validation.Valid;
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

    final ProgramsPartService programsPartService;

    public AdminGetObjectsController(AboutUsService aboutUsService, DressCodeService dressCodeService, InvitaitionTextService invitaitionTextService, PersonalInvitationService personalInvitationService, PlaceService placeService, ProgramService programService, StoryService storyService, WeddingDateService weddingDateService, ProgramsPartService programsPartService) {
        this.aboutUsService = aboutUsService;
        this.dressCodeService = dressCodeService;
        this.invitaitionTextService = invitaitionTextService;
        this.personalInvitationService = personalInvitationService;
        this.placeService = placeService;
        this.programService = programService;
        this.storyService = storyService;
        this.weddingDateService = weddingDateService;
        this.programsPartService = programsPartService;
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

    @GetMapping(value = "/program")
    public ProgramResponse getProgram() {
        return programService.getProgram();
    }

    @GetMapping(value = "/personalInvitations")
    public List<PersonalInvitationResponse> getPersonalInvitations() {
        return personalInvitationService.get();
    }

    @GetMapping(value = "/personalInvitation/{key}")
    public PersonalInvitationResponse getPersonalInvitation(@PathVariable String key) {
        return personalInvitationService.getPersonal(key);
    }
}
