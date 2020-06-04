package weddingsitebackend.weddingsitebackend.sevice;

import org.springframework.http.ResponseEntity;
import weddingsitebackend.weddingsitebackend.payload.common.ApiResponse;
import weddingsitebackend.weddingsitebackend.payload.requests.PersonalInvitationRequest;
import weddingsitebackend.weddingsitebackend.payload.responses.PersonalInvitationResponse;

import java.util.List;

public interface PersonalInvitationService {
    ResponseEntity<?> update(PersonalInvitationRequest personalInvitationRequest);

    ResponseEntity<?> create(PersonalInvitationRequest personalInvitationRequest);

    List<ApiResponse> getApiResponses(String response1, String response2);

    ResponseEntity<?> delete(PersonalInvitationRequest personalInvitationRequest);

    List<PersonalInvitationResponse> get();
}
