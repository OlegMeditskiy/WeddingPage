package weddingsitebackend.weddingsitebackend.payload.responses;

import lombok.Getter;
import lombok.Setter;
import weddingsitebackend.weddingsitebackend.models.siteObjects.InvitationStatus;

@Setter
@Getter
public class PersonalInvitationResponse {

    private Long id;

    private String names;

    private String invitationLink;

    private InvitationStatus status;

    private boolean needTransfer;

}
