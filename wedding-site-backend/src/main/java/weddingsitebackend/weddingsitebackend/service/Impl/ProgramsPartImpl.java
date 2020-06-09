package weddingsitebackend.weddingsitebackend.service.Impl;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import weddingsitebackend.weddingsitebackend.models.siteObjects.Program;
import weddingsitebackend.weddingsitebackend.models.siteObjects.ProgramsPart;
import weddingsitebackend.weddingsitebackend.payload.common.ApiResponse;
import weddingsitebackend.weddingsitebackend.payload.requests.ProgramsPartRequest;
import weddingsitebackend.weddingsitebackend.repository.siteObjects.ProgramRepo;
import weddingsitebackend.weddingsitebackend.repository.siteObjects.ProgramsPartRepo;
import weddingsitebackend.weddingsitebackend.service.ProgramsPartService;

import javax.transaction.Transactional;

@Service
public class ProgramsPartImpl implements ProgramsPartService {
    final ProgramsPartRepo programsPartRepo;
    final ProgramRepo programRepo;

    public ProgramsPartImpl(ProgramsPartRepo programsPartRepo, ProgramRepo programRepo) {
        this.programsPartRepo = programsPartRepo;
        this.programRepo = programRepo;
    }

    @Override
    public ResponseEntity<?> update(ProgramsPartRequest programsPartRequest) {
        System.out.println(programsPartRequest);
        ProgramsPart programsPart = programsPartRepo.getOne(programsPartRequest.getId());
        programsPart.setProgramsText(programsPartRequest.getProgramsText());
        programsPart.setStartTime(programsPartRequest.getStartTime());
        programsPart.setFinishTime(programsPartRequest.getFinishTime());
        programsPartRepo.save(programsPart);
        return ResponseEntity.ok().body(new ApiResponse(true, "Часть программы была обновлена"));
    }

    @Override
    public ResponseEntity<?> create(ProgramsPartRequest programsPartRequest) {
        Program program = programRepo.getOne((long) 1);
        ProgramsPart programsPart = new ProgramsPart();
        programsPart.setStartTime(programsPartRequest.getStartTime());
        programsPart.setFinishTime(programsPartRequest.getFinishTime());
        programsPart.setProgramsText(programsPartRequest.getProgramsText());
        programsPart.setProgram(program);
        programsPartRepo.save(programsPart);
        return ResponseEntity.ok().body(new ApiResponse(true, "Часть программы была создана"));
    }

    @Override
    @Transactional
    public ResponseEntity<?> delete(ProgramsPartRequest programsPartRequest) {
        System.out.println(programsPartRequest.getId());
        ProgramsPart programsPart = programsPartRepo.getOne(programsPartRequest.getId());
        programsPart.setProgram(null);
        programsPartRepo.delete(programsPart);
        return ResponseEntity.ok().body(new ApiResponse(true, "Часть программы была удалена"));
    }
}
