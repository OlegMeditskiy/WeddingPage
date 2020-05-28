package weddingsitebackend.weddingsitebackend.payload.siteObjects;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class AboutUsResponse {
    private Long id;

    private String name;

    private String about;

    public AboutUsResponse() {
    }
}
