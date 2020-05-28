package weddingsitebackend.weddingsitebackend.sevice;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import weddingsitebackend.weddingsitebackend.models.siteObjects.PersonalInvitation;
import weddingsitebackend.weddingsitebackend.payload.common.ApiResponse;
import weddingsitebackend.weddingsitebackend.payload.siteObjects.PersonalInvitationRequest;
import weddingsitebackend.weddingsitebackend.repository.siteObjects.PersonalInvitationRepo;

@Service
public class PersonalInvitationService {
    final
    PersonalInvitationRepo personalInvitationRepo;

    public PersonalInvitationService(PersonalInvitationRepo personalInvitationRepo) {
        this.personalInvitationRepo = personalInvitationRepo;
    }

    public ResponseEntity<?> update(PersonalInvitationRequest personalInvitationRequest){
        PersonalInvitation personalInvitation = personalInvitationRepo.getOne(personalInvitationRequest.getId());
        personalInvitation.setNames(personalInvitationRequest.getNames());
        personalInvitationRepo.save(personalInvitation);
        return ResponseEntity.ok().body(new ApiResponse(true, "Персональное приглашение было обновлено"));
    }
    public ResponseEntity<?> create(PersonalInvitationRequest personalInvitationRequest){
        PersonalInvitation personalInvitation = new PersonalInvitation();
        personalInvitation.setNames(personalInvitationRequest.getNames());
        personalInvitationRepo.save(personalInvitation);
        return ResponseEntity.ok().body(new ApiResponse(true, "Персональное приглашение для "+personalInvitationRequest.getNames()+" было создано"));
    }
}
