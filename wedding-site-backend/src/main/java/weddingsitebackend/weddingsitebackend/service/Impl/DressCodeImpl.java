package weddingsitebackend.weddingsitebackend.service.Impl;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import weddingsitebackend.weddingsitebackend.models.siteObjects.DressCode;
import weddingsitebackend.weddingsitebackend.payload.common.ApiResponse;
import weddingsitebackend.weddingsitebackend.payload.requests.DressCodeRequest;
import weddingsitebackend.weddingsitebackend.payload.responses.DressCodeResponse;
import weddingsitebackend.weddingsitebackend.repository.siteObjects.DressCodeRepo;
import weddingsitebackend.weddingsitebackend.service.DressCodeService;
import weddingsitebackend.weddingsitebackend.service.StorageService;

import java.io.IOException;
import java.util.UUID;

@Service
public class DressCodeImpl implements DressCodeService {
    final
    DressCodeRepo dressCodeRepo;

    final StorageService storageService;

    public DressCodeImpl(DressCodeRepo dressCodeRepo, StorageService storageService) {
        this.dressCodeRepo = dressCodeRepo;
        this.storageService = storageService;
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
        DressCodeResponse dressCodeResponse = new DressCodeResponse(dressCode.getId(), dressCode.getText(),dressCode.getDressMale(),dressCode.getDressFemale());
        return dressCodeResponse;
    }

    @Override
    public ResponseEntity<?> photoUploadDressMale(MultipartFile file) throws IOException {
        DressCode dressCode = dressCodeRepo.getOne((long)1);
        if (dressCode.getDressMale()!=null&&dressCode.getDressMale().length()>0){
            storageService.delete(dressCode.getDressMale());
        }
        UUID uniqueKey = UUID.randomUUID();
        String photoName=storageService.saveAsString(file,uniqueKey.toString());
        dressCode.setDressMale(photoName);
        dressCodeRepo.save(dressCode);
        return ResponseEntity.ok().body(new ApiResponse(true, "Photo was updated"));
    }
    @Override
    public ResponseEntity<?> photoUploadDressFemale(MultipartFile file) throws IOException {
        DressCode dressCode = dressCodeRepo.getOne((long)1);
        if (dressCode.getDressFemale()!=null&&dressCode.getDressFemale().length()>0){ storageService.delete(dressCode.getDressFemale());}
        UUID uniqueKey = UUID.randomUUID();
        String photoName=storageService.saveAsString(file,uniqueKey.toString());
        dressCode.setDressFemale(photoName);
        dressCodeRepo.save(dressCode);
        return ResponseEntity.ok().body(new ApiResponse(true, "Photo was updated"));
    }
}
