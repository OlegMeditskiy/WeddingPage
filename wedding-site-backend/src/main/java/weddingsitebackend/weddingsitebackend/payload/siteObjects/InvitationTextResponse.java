package weddingsitebackend.weddingsitebackend.payload.siteObjects;

import lombok.Setter;

import java.util.Date;
@Setter
public class InvitationTextResponse {

    private Long id;

    private String invitationText;

    private Date finalDate;
}
