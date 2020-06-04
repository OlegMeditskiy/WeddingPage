package weddingsitebackend.weddingsitebackend.payload.responses;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class PersonalInvitationResponse {

    private Long id;

    private String names;

    private String invitationLink;

    private boolean accepted = false;

    private boolean needTransfer = false;

}
