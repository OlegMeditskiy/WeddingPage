package weddingsitebackend.weddingsitebackend.models.siteObjects;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Type;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
public class InvitationText {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Lob
    @Type(type = "org.hibernate.type.TextType")
    private String invitationText;

    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date finalDate;
}
