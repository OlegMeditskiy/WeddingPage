package weddingsitebackend.weddingsitebackend.repository.siteObjects;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import weddingsitebackend.weddingsitebackend.models.siteObjects.WeddingDate;

@Repository
public interface WeddingDateRepo extends JpaRepository<WeddingDate, Long> {
}
