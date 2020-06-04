package weddingsitebackend.weddingsitebackend.sevice;

import org.springframework.http.ResponseEntity;
import weddingsitebackend.weddingsitebackend.payload.requests.StoryRequest;
import weddingsitebackend.weddingsitebackend.payload.responses.StoryResponse;

public interface StoryService {

    ResponseEntity<?> update(StoryRequest storyRequest);

    StoryResponse getStory();
}
