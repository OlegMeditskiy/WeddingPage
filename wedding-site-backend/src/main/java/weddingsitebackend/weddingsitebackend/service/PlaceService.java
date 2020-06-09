package weddingsitebackend.weddingsitebackend.service;

import org.springframework.http.ResponseEntity;
import weddingsitebackend.weddingsitebackend.payload.requests.PlaceRequest;
import weddingsitebackend.weddingsitebackend.payload.responses.PlaceResponse;


public interface PlaceService {

    ResponseEntity<?> update(PlaceRequest placeRequest);

    PlaceResponse getPlace();
}
