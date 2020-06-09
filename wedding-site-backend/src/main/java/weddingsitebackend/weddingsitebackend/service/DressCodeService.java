package weddingsitebackend.weddingsitebackend.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;
import weddingsitebackend.weddingsitebackend.payload.requests.DressCodeRequest;
import weddingsitebackend.weddingsitebackend.payload.responses.DressCodeResponse;

import java.io.IOException;

public interface DressCodeService {
    ResponseEntity<?> update(DressCodeRequest dressCodeRequest);

    DressCodeResponse getDressCode();
    ResponseEntity<?> photoUploadDressMale(MultipartFile file) throws IOException;
    ResponseEntity<?> photoUploadDressFemale(MultipartFile file) throws IOException;
}
