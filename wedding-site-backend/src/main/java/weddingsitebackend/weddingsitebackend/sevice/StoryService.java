package weddingsitebackend.weddingsitebackend.sevice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import weddingsitebackend.weddingsitebackend.models.siteObjects.Story;
import weddingsitebackend.weddingsitebackend.payload.common.ApiResponse;
import weddingsitebackend.weddingsitebackend.payload.siteObjects.StoryRequest;
import weddingsitebackend.weddingsitebackend.repository.siteObjects.DressCodeRepo;
import weddingsitebackend.weddingsitebackend.repository.siteObjects.StoryRepo;

@Service
public class StoryService {
    final
    StoryRepo storyRepo;

    public StoryService(StoryRepo storyRepo) {
        this.storyRepo = storyRepo;
    }

    public ResponseEntity<?> update(StoryRequest storyRequest){
        Story story = storyRepo.getOne(storyRequest.getId());
        story.setStory(storyRequest.getStory());
        story.setStoryTitle(storyRequest.getStoryTitle());
        storyRepo.save(story);
        return ResponseEntity.ok().body(new ApiResponse(true, "История была обновлена"));
    }
}
