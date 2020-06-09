package weddingsitebackend.weddingsitebackend.service.Impl;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import weddingsitebackend.weddingsitebackend.models.siteObjects.Story;
import weddingsitebackend.weddingsitebackend.payload.common.ApiResponse;
import weddingsitebackend.weddingsitebackend.payload.requests.StoryRequest;
import weddingsitebackend.weddingsitebackend.payload.responses.StoryResponse;
import weddingsitebackend.weddingsitebackend.repository.siteObjects.StoryRepo;
import weddingsitebackend.weddingsitebackend.service.StoryService;

@Service
public class StoryImpl implements StoryService {
    final
    StoryRepo storyRepo;

    public StoryImpl(StoryRepo storyRepo) {
        this.storyRepo = storyRepo;
    }

    @Override
    public ResponseEntity<?> update(StoryRequest storyRequest) {
        Story story = storyRepo.getOne(storyRequest.getId());
        story.setStory(storyRequest.getStory());
        story.setStoryTitle(storyRequest.getStoryTitle());
        storyRepo.save(story);
        return ResponseEntity.ok().body(new ApiResponse(true, "История была обновлена"));
    }

    @Override
    public StoryResponse getStory() {
        Story story = storyRepo.getOne((long) 1);
        StoryResponse storyResponse = new StoryResponse(story.getId(), story.getStoryTitle(), story.getStory());
        return storyResponse;
    }
}
