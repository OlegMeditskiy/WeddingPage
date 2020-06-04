package weddingsitebackend.weddingsitebackend.sevice.Impl;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import weddingsitebackend.weddingsitebackend.models.siteObjects.WeddingDate;
import weddingsitebackend.weddingsitebackend.payload.common.ApiResponse;
import weddingsitebackend.weddingsitebackend.payload.requests.WeddingDateRequest;
import weddingsitebackend.weddingsitebackend.payload.responses.WeddingDateResponse;
import weddingsitebackend.weddingsitebackend.repository.siteObjects.WeddingDateRepo;
import weddingsitebackend.weddingsitebackend.sevice.WeddingDateService;

@Service
public class WeddingDateImpl implements WeddingDateService {
    final
    WeddingDateRepo weddingDateRepo;

    public WeddingDateImpl(WeddingDateRepo weddingDateRepo) {
        this.weddingDateRepo = weddingDateRepo;
    }

    @Override
    public ResponseEntity<?> update(WeddingDateRequest weddingDateRequest) {
        WeddingDate weddingDate = weddingDateRepo.getOne(weddingDateRequest.getId());
        weddingDate.setWeddingDate(weddingDateRequest.getWeddingDate());
        weddingDateRepo.save(weddingDate);
        return ResponseEntity.ok().body(new ApiResponse(true, "Время свадьбы было обновлено"));
    }

    @Override
    public WeddingDateResponse getWeddingDate() {
        WeddingDate weddingDate = weddingDateRepo.getOne((long) 1);
        WeddingDateResponse weddingDateResponse = new WeddingDateResponse(weddingDate.getId(), weddingDate.getWeddingDate());
        return weddingDateResponse;
    }
}
