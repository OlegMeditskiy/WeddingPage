package weddingsitebackend.weddingsitebackend.models.siteObjects;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Getter
@Setter
public class PersonalInvitation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String names;

    private String invitationLink;

    private InvitationStatus status = InvitationStatus.NOT_ANSWERED;

    private boolean needTransfer = false;

    @Type(type = "uuid-char")
    private UUID uniqueKey = UUID.randomUUID();


}
