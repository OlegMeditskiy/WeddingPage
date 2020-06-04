package weddingsitebackend.weddingsitebackend.sevice;

import org.springframework.http.ResponseEntity;
import weddingsitebackend.weddingsitebackend.payload.requests.DressCodeRequest;
import weddingsitebackend.weddingsitebackend.payload.responses.DressCodeResponse;

public interface DressCodeService {
    ResponseEntity<?> update(DressCodeRequest dressCodeRequest);

    DressCodeResponse getDressCode();
}
