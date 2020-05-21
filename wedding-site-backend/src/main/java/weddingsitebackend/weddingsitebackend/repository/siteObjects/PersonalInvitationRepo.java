package weddingsitebackend.weddingsitebackend.repository.siteObjects;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import weddingsitebackend.weddingsitebackend.models.siteObjects.PersonalInvitation;

import java.util.UUID;

@Repository
public interface PersonalInvitationRepo extends JpaRepository<PersonalInvitation, Long> {
    PersonalInvitation findByUniqueKey(UUID uniqueKey);
}
