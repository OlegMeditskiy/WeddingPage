package weddingsitebackend.weddingsitebackend.payload.siteObjects;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class StoryResponse {

    private Long id;

    private String storyTitle;

    private String story;
}
