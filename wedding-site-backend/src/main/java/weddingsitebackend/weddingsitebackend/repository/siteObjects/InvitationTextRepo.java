package weddingsitebackend.weddingsitebackend.repository.siteObjects;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import weddingsitebackend.weddingsitebackend.models.siteObjects.InvitationText;

@Repository
public interface InvitationTextRepo extends JpaRepository<InvitationText, Long> {
}
