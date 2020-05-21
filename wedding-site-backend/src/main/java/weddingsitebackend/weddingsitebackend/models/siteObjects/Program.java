package weddingsitebackend.weddingsitebackend.models.siteObjects;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Program {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Lob
    @Type(type = "org.hibernate.type.TextType")
    private String program;

}
