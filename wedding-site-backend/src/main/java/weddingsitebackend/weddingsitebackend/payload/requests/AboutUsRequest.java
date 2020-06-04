package weddingsitebackend.weddingsitebackend.payload.requests;

import lombok.Getter;

@Getter
public class AboutUsRequest {
    private Long id;

    private String name;

    private String about;
}
