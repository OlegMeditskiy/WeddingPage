package weddingsitebackend.weddingsitebackend.payload.siteObjects;

import lombok.Setter;

@Setter
public class PersonalnvitationResponse {

    private Long id;

    private String names;

    private String invitationLink;

    private boolean accepted = false;

    private boolean needTransfer = false;

}
