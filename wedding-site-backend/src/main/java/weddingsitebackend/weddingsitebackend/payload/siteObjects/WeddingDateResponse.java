package weddingsitebackend.weddingsitebackend.payload.siteObjects;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
@Setter
@Getter
@AllArgsConstructor
public class WeddingDateResponse {
    private Long id;

    private Date weddingDate;
}
