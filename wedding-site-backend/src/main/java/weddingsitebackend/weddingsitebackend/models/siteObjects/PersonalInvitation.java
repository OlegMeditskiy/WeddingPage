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

    @Column(columnDefinition = "boolean default false", nullable = false)
    private boolean accepted = false;

    private boolean needTransfer = false;

    @Type(type = "uuid-char")
    private UUID uniqueKey= UUID.randomUUID();


}
