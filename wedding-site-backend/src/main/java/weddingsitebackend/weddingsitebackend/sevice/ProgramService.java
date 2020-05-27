package weddingsitebackend.weddingsitebackend.sevice;

import org.springframework.stereotype.Service;
import weddingsitebackend.weddingsitebackend.repository.siteObjects.ProgramRepo;

@Service
public class ProgramService {
    final
    ProgramRepo programRepo;

    public ProgramService(ProgramRepo programRepo) {
        this.programRepo = programRepo;
    }


}
