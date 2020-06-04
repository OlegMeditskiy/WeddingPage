package weddingsitebackend.weddingsitebackend.sevice.Impl;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import weddingsitebackend.weddingsitebackend.models.siteObjects.InvitationText;
import weddingsitebackend.weddingsitebackend.payload.common.ApiResponse;
import weddingsitebackend.weddingsitebackend.payload.requests.InvitationTextRequest;
import weddingsitebackend.weddingsitebackend.payload.responses.InvitationTextResponse;
import weddingsitebackend.weddingsitebackend.repository.siteObjects.InvitationTextRepo;
import weddingsitebackend.weddingsitebackend.sevice.InvitaitionTextService;

@Service
public class InvitationTextImpl implements InvitaitionTextService {
    final
    InvitationTextRepo invitationTextRepo;

    public InvitationTextImpl(InvitationTextRepo invitationTextRepo) {
        this.invitationTextRepo = invitationTextRepo;
    }

    @Override
    public ResponseEntity<?> update(InvitationTextRequest invitationTextRequest) {
        InvitationText invitationText = invitationTextRepo.getOne(invitationTextRequest.getId());
        invitationText.setFinalDate(invitationText.getFinalDate());
        invitationText.setInvitationText(invitationText.getInvitationText());
        invitationTextRepo.save(invitationText);
        return ResponseEntity.ok().body(new ApiResponse(true, "Текст приглашения был обновлен"));
    }

    @Override
    public InvitationTextResponse getInvitationText() {
        InvitationText invitationText = invitationTextRepo.getOne((long) 1);
        InvitationTextResponse invitationTextResponse = new InvitationTextResponse(invitationText.getId(), invitationText.getInvitationText(), invitationText.getFinalDate());
        return invitationTextResponse;
    }
}
