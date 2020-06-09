package weddingsitebackend.weddingsitebackend.payload.responses;

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

    private String photoName;

    public AboutUsResponse() {
    }
}
