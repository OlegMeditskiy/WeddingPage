package weddingsitebackend.weddingsitebackend.payload.responses;

import lombok.Getter;
import lombok.Setter;
import weddingsitebackend.weddingsitebackend.models.siteObjects.ProgramsPart;

import java.util.List;

@Getter
@Setter
public class ProgramResponse {
    Long id;
    List<ProgramsPart> programsParts;
}
