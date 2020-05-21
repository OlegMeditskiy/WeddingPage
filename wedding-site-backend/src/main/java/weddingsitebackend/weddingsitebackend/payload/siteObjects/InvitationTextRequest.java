package weddingsitebackend.weddingsitebackend.payload.siteObjects;

import lombok.Getter;

import java.util.Date;
@Getter
public class InvitationTextRequest {

    private Long id;

    private String invitationText;

    private Date finalDate;
}
