package weddingsitebackend.weddingsitebackend.models.siteObjects;

import org.hibernate.annotations.Type;

import javax.persistence.*;

@Entity
public class Story {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String storyTitle;

    @Lob
    @Type(type = "org.hibernate.type.TextType")
    private String story;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStoryTitle() {
        return storyTitle;
    }

    public void setStoryTitle(String storyTitle) {
        this.storyTitle = storyTitle;
    }

    public String getStory() {
        return story;
    }

    public void setStory(String story) {
        this.story = story;
    }
}
