package weddingsitebackend.weddingsitebackend.sevice;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import weddingsitebackend.weddingsitebackend.models.siteObjects.DressCode;
import weddingsitebackend.weddingsitebackend.payload.common.ApiResponse;
import weddingsitebackend.weddingsitebackend.payload.siteObjects.DressCodeRequest;
import weddingsitebackend.weddingsitebackend.repository.siteObjects.DressCodeRepo;

@Service
public class DressCodeService {
    final
    DressCodeRepo dressCodeRepo;

    public DressCodeService(DressCodeRepo dressCodeRepo) {
        this.dressCodeRepo = dressCodeRepo;
    }

    public ResponseEntity<?> update(DressCodeRequest dressCodeRequest){
        DressCode dressCode = dressCodeRepo.getOne(dressCodeRequest.getId());
        dressCode.setText(dressCodeRequest.getText());
        dressCodeRepo.save(dressCode);
        return ResponseEntity.ok().body(new ApiResponse(true, "Дресс код был обновлен"));
    }
}
