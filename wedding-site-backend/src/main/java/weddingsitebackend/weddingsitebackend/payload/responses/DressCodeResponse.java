package weddingsitebackend.weddingsitebackend.payload.responses;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class DressCodeResponse {
    private Long id;

    private String text;

    private String dressMale;

    private String dressFemale;

}
