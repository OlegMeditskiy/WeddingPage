package weddingsitebackend.weddingsitebackend.sevice;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import weddingsitebackend.weddingsitebackend.models.siteObjects.InvitationText;
import weddingsitebackend.weddingsitebackend.payload.common.ApiResponse;
import weddingsitebackend.weddingsitebackend.payload.siteObjects.InvitationTextRequest;
import weddingsitebackend.weddingsitebackend.payload.siteObjects.InvitationTextResponse;
import weddingsitebackend.weddingsitebackend.repository.siteObjects.InvitationTextRepo;

@Service
public class InvitaitionTextService {
    final
    InvitationTextRepo invitationTextRepo;

    public InvitaitionTextService(InvitationTextRepo invitationTextRepo) {
        this.invitationTextRepo = invitationTextRepo;
    }

    public ResponseEntity<?> update(InvitationTextRequest invitationTextRequest){
        InvitationText invitationText = invitationTextRepo.getOne(invitationTextRequest.getId());
        invitationText.setFinalDate(invitationText.getFinalDate());
        invitationText.setInvitationText(invitationText.getInvitationText());
        invitationTextRepo.save(invitationText);
        return ResponseEntity.ok().body(new ApiResponse(true, "Текст приглашения был обновлен"));
    }
    public InvitationTextResponse getInvitationText(){
        InvitationText invitationText = invitationTextRepo.getOne((long)1);
        InvitationTextResponse invitationTextResponse = new InvitationTextResponse(invitationText.getId(),invitationText.getInvitationText(),invitationText.getFinalDate());
        return invitationTextResponse;
    }
}
