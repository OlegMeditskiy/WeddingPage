package weddingsitebackend.weddingsitebackend.payload.requests;

import lombok.Getter;

import java.util.Date;

@Getter
public class WeddingDateRequest {
    private Long id;
    private Date weddingDate;
}
