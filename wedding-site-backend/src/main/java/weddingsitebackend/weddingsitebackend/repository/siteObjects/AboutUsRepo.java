package weddingsitebackend.weddingsitebackend.repository.siteObjects;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import weddingsitebackend.weddingsitebackend.models.siteObjects.AboutUs;


@Repository
public interface AboutUsRepo extends JpaRepository<AboutUs, Long> {
}
