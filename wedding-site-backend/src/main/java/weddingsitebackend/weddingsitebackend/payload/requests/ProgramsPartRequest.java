package weddingsitebackend.weddingsitebackend.payload.requests;

import lombok.Getter;
import org.hibernate.annotations.Type;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

@Getter
public class ProgramsPartRequest {

    private Long id;

    private String programsText;

    private String startTime;

    private String finishTime;


}
