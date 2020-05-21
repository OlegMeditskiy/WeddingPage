package weddingsitebackend.weddingsitebackend.models.siteObjects;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class ProgramsPart {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Lob
    @Type(type = "org.hibernate.type.TextType")
    private String programsText;

    @ManyToOne
    @JoinTable(name = "program_programs_parts", joinColumns = @JoinColumn(name = "programs_part_id"), inverseJoinColumns = @JoinColumn(name = "program_id"))
    @JsonBackReference
    Program program;
}
