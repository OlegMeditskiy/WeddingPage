package weddingsitebackend.weddingsitebackend.models.siteObjects;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class WeddingDate {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

//    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date weddingDate;
}
