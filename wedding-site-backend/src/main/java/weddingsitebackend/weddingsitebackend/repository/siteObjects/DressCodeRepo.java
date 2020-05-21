package weddingsitebackend.weddingsitebackend.repository.siteObjects;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import weddingsitebackend.weddingsitebackend.models.siteObjects.DressCode;

@Repository
public interface DressCodeRepo extends JpaRepository<DressCode, Long> {
}
