package weddingsitebackend.weddingsitebackend.sevice.Impl;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import weddingsitebackend.weddingsitebackend.models.siteObjects.DressCode;
import weddingsitebackend.weddingsitebackend.payload.common.ApiResponse;
import weddingsitebackend.weddingsitebackend.payload.requests.DressCodeRequest;
import weddingsitebackend.weddingsitebackend.payload.responses.DressCodeResponse;
import weddingsitebackend.weddingsitebackend.repository.siteObjects.DressCodeRepo;
import weddingsitebackend.weddingsitebackend.sevice.DressCodeService;

@Service
public class DressCodeImpl implements DressCodeService {
    final
    DressCodeRepo dressCodeRepo;

    public DressCodeImpl(DressCodeRepo dressCodeRepo) {
        this.dressCodeRepo = dressCodeRepo;
    }

    @Override
    public ResponseEntity<?> update(DressCodeRequest dressCodeRequest) {
        DressCode dressCode = dressCodeRepo.getOne(dressCodeRequest.getId());
        dressCode.setText(dressCodeRequest.getText());
        dressCodeRepo.save(dressCode);
        return ResponseEntity.ok().body(new ApiResponse(true, "Дресс код был обновлен"));
    }

    @Override
    public DressCodeResponse getDressCode() {
        DressCode dressCode = dressCodeRepo.getOne((long) 1);
        DressCodeResponse dressCodeResponse = new DressCodeResponse(dressCode.getId(), dressCode.getText());
        return dressCodeResponse;
    }
}
