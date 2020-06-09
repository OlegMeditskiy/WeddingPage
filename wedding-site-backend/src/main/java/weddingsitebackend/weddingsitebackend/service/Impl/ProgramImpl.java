package weddingsitebackend.weddingsitebackend.service.Impl;

import org.springframework.stereotype.Service;
import weddingsitebackend.weddingsitebackend.models.siteObjects.Program;
import weddingsitebackend.weddingsitebackend.models.siteObjects.ProgramsPart;
import weddingsitebackend.weddingsitebackend.payload.responses.ProgramResponse;
import weddingsitebackend.weddingsitebackend.repository.siteObjects.ProgramRepo;
import weddingsitebackend.weddingsitebackend.repository.siteObjects.ProgramsPartRepo;
import weddingsitebackend.weddingsitebackend.service.ProgramService;

import java.util.List;

@Service
public class ProgramImpl implements ProgramService {
    final
    ProgramRepo programRepo;

    final ProgramsPartRepo programsPartRepo;

    public ProgramImpl(ProgramRepo programRepo, ProgramsPartRepo programsPartRepo) {
        this.programRepo = programRepo;
        this.programsPartRepo = programsPartRepo;
    }

    @Override
    public ProgramResponse getProgram() {
        Program program = programRepo.getOne((long) 1);
        ProgramResponse programResponse = new ProgramResponse();

        programResponse.setId(program.getId());
        try {
            List<ProgramsPart> programsPartList = programsPartRepo.findByProgramOrderByStartTimeAsc(program);
            programResponse.setProgramsParts(programsPartList);
        } catch (Exception ex) {
            System.out.println(ex);
        }
        return programResponse;
    }
}
