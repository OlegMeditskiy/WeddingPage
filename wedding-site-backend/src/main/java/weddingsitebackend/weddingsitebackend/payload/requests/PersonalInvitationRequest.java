package weddingsitebackend.weddingsitebackend.payload.requests;

import lombok.Getter;

@Getter
public class PersonalInvitationRequest {

    private Long id;

    private String names;

    private String key;

    private boolean needTransfer;

}
