package weddingsitebackend.weddingsitebackend.sevice.Impl;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import weddingsitebackend.weddingsitebackend.models.siteObjects.Place;
import weddingsitebackend.weddingsitebackend.payload.common.ApiResponse;
import weddingsitebackend.weddingsitebackend.payload.requests.PlaceRequest;
import weddingsitebackend.weddingsitebackend.payload.responses.PlaceResponse;
import weddingsitebackend.weddingsitebackend.repository.siteObjects.PlaceRepo;
import weddingsitebackend.weddingsitebackend.sevice.PlaceService;

@Service
public class PlaceImpl implements PlaceService {
    final
    PlaceRepo placeRepo;

    public PlaceImpl(PlaceRepo placeRepo) {
        this.placeRepo = placeRepo;
    }

    @Override
    public ResponseEntity<?> update(PlaceRequest placeRequest) {
        Place place = placeRepo.getOne(placeRequest.getId());
        place.setPlace(placeRequest.getPlace());
        placeRepo.save(place);
        return ResponseEntity.ok().body(new ApiResponse(true, "Место проведения было обновлено"));
    }

    @Override
    public PlaceResponse getPlace() {
        Place place = placeRepo.getOne((long) 1);
        PlaceResponse placeResponse = new PlaceResponse(place.getId(), place.getPlace());
        return placeResponse;
    }
}
