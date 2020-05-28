package weddingsitebackend.weddingsitebackend.sevice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import weddingsitebackend.weddingsitebackend.models.siteObjects.Place;
import weddingsitebackend.weddingsitebackend.models.siteObjects.ProgramsPart;
import weddingsitebackend.weddingsitebackend.payload.common.ApiResponse;
import weddingsitebackend.weddingsitebackend.payload.siteObjects.PlaceRequest;
import weddingsitebackend.weddingsitebackend.payload.siteObjects.ProgramsPartRequest;
import weddingsitebackend.weddingsitebackend.repository.siteObjects.ProgramsPartRepo;

@Service
public class ProgramsPartService {
    final ProgramsPartRepo programsPartRepo;

    public ProgramsPartService(ProgramsPartRepo programsPartRepo) {
        this.programsPartRepo = programsPartRepo;
    }
    public ResponseEntity<?> update(ProgramsPartRequest programsPartRequest){
        ProgramsPart programsPart = programsPartRepo.getOne(programsPartRequest.getId());
        programsPart.setProgramsText(programsPartRequest.getProgramsText());
        programsPartRepo.save(programsPart);
        return ResponseEntity.ok().body(new ApiResponse(true, "Часть программы была обновлена"));
    }
}
