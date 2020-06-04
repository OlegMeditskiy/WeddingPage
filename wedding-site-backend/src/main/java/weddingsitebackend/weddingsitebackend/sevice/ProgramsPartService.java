package weddingsitebackend.weddingsitebackend.sevice;

import org.springframework.http.ResponseEntity;
import weddingsitebackend.weddingsitebackend.payload.requests.ProgramsPartRequest;

public interface ProgramsPartService {

    ResponseEntity<?> update(ProgramsPartRequest programsPartRequest);

    ResponseEntity<?> create(ProgramsPartRequest programsPartRequest);

    ResponseEntity<?> delete(ProgramsPartRequest programsPartRequest);
}
