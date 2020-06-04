package weddingsitebackend.weddingsitebackend.repository.siteObjects;

import org.springframework.data.jpa.repository.JpaRepository;
import weddingsitebackend.weddingsitebackend.models.siteObjects.Program;
import weddingsitebackend.weddingsitebackend.models.siteObjects.ProgramsPart;

import java.util.List;

public interface ProgramsPartRepo extends JpaRepository<ProgramsPart, Long> {
    List<ProgramsPart> findByProgramOrderByStartTimeAsc(Program program);
}
