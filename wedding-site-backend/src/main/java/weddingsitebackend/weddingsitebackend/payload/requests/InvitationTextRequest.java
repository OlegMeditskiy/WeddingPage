package weddingsitebackend.weddingsitebackend.payload.requests;

import lombok.Getter;

import java.util.Date;

@Getter
public class InvitationTextRequest {

    private Long id;

    private String invitationText;

    private Date finalDate;
}
