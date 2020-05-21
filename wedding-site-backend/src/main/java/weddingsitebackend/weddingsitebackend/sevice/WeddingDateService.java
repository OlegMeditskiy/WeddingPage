package weddingsitebackend.weddingsitebackend.sevice;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import weddingsitebackend.weddingsitebackend.models.siteObjects.WeddingDate;
import weddingsitebackend.weddingsitebackend.payload.common.ApiResponse;
import weddingsitebackend.weddingsitebackend.payload.siteObjects.WeddingDateRequest;
import weddingsitebackend.weddingsitebackend.repository.siteObjects.WeddingDateRepo;

@Service
public class WeddingDateService {
    final
    WeddingDateRepo weddingDateRepo;

    public WeddingDateService(WeddingDateRepo weddingDateRepo) {
        this.weddingDateRepo = weddingDateRepo;
    }

    public ResponseEntity<?> update(WeddingDateRequest weddingDateRequest){
        WeddingDate weddingDate = weddingDateRepo.getOne(weddingDateRequest.getId());
        weddingDate.setWeddingDate(weddingDateRequest.getWeddingDate());
        weddingDateRepo.save(weddingDate);
        return ResponseEntity.ok().body(new ApiResponse(true, "Время свадьбы было обновлено"));
    }
}
