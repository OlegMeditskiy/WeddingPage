package weddingsitebackend.weddingsitebackend.models.siteObjects;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
public class Program {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToMany(mappedBy = "program",cascade = CascadeType.ALL)
    @JsonManagedReference
    List<ProgramsPart> programsParts;


}
