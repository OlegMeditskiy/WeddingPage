package weddingsitebackend.weddingsitebackend.payload.responses;

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
