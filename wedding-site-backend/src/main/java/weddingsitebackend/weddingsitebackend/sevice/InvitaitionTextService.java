package weddingsitebackend.weddingsitebackend.sevice;

import org.springframework.http.ResponseEntity;
import weddingsitebackend.weddingsitebackend.payload.requests.InvitationTextRequest;
import weddingsitebackend.weddingsitebackend.payload.responses.InvitationTextResponse;

public interface InvitaitionTextService {
    ResponseEntity<?> update(InvitationTextRequest invitationTextRequest);

    InvitationTextResponse getInvitationText();
}
