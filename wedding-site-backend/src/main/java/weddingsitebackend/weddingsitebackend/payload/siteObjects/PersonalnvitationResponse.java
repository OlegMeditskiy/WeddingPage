package weddingsitebackend.weddingsitebackend.payload.siteObjects;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class PersonalnvitationResponse {

    private Long id;

    private String names;

    private String invitationLink;

    private boolean accepted = false;

    private boolean needTransfer = false;

}
