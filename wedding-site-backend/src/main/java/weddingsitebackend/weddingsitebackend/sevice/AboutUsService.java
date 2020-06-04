package weddingsitebackend.weddingsitebackend.sevice;

import org.springframework.http.ResponseEntity;
import weddingsitebackend.weddingsitebackend.payload.requests.AboutUsRequest;
import weddingsitebackend.weddingsitebackend.payload.responses.AboutUsResponse;

import java.util.List;


public interface AboutUsService {

    ResponseEntity<?> update(AboutUsRequest aboutUsRequest);

    List<AboutUsResponse> getAllAboutUs();
}
