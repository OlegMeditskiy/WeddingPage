package weddingsitebackend.weddingsitebackend.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;
import weddingsitebackend.weddingsitebackend.payload.requests.AboutUsRequest;
import weddingsitebackend.weddingsitebackend.payload.responses.AboutUsResponse;

import java.io.IOException;
import java.util.List;


public interface AboutUsService {

    ResponseEntity<?> update(AboutUsRequest aboutUsRequest);

    List<AboutUsResponse> getAllAboutUs();

    ResponseEntity<?> photoUpload(MultipartFile file,AboutUsRequest aboutUsRequest) throws IOException;
}
