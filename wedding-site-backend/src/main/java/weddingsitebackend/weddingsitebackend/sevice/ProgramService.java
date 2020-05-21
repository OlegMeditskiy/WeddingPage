package weddingsitebackend.weddingsitebackend.sevice;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import weddingsitebackend.weddingsitebackend.models.siteObjects.Program;
import weddingsitebackend.weddingsitebackend.payload.common.ApiResponse;
import weddingsitebackend.weddingsitebackend.payload.siteObjects.ProgramRequest;
import weddingsitebackend.weddingsitebackend.repository.siteObjects.ProgramRepo;

@Service
public class ProgramService {
    final
    ProgramRepo programRepo;

    public ProgramService(ProgramRepo programRepo) {
        this.programRepo = programRepo;
    }

    public ResponseEntity<?> update(ProgramRequest programRequest){
        Program program = programRepo.getOne(programRequest.getId());
        program.setProgram(programRequest.getProgram());
        programRepo.save(program);
        return ResponseEntity.ok().body(new ApiResponse(true, "Программа была обновлена"));
    }
}
