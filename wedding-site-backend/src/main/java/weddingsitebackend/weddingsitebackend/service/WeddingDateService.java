package weddingsitebackend.weddingsitebackend.service;

import org.springframework.http.ResponseEntity;
import weddingsitebackend.weddingsitebackend.payload.requests.WeddingDateRequest;
import weddingsitebackend.weddingsitebackend.payload.responses.WeddingDateResponse;


public interface WeddingDateService {

    ResponseEntity<?> update(WeddingDateRequest weddingDateRequest);

    WeddingDateResponse getWeddingDate();
}
