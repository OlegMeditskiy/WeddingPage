package weddingsitebackend.weddingsitebackend.models.siteObjects;

import org.hibernate.annotations.Type;

import javax.persistence.*;

@Entity
public class AboutUs {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    @Lob
    @Type(type = "org.hibernate.type.TextType")
    private String about;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }
}
