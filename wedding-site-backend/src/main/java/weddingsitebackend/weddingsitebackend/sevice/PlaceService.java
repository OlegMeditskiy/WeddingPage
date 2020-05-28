package weddingsitebackend.weddingsitebackend.sevice;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import weddingsitebackend.weddingsitebackend.models.siteObjects.Place;
import weddingsitebackend.weddingsitebackend.payload.common.ApiResponse;
import weddingsitebackend.weddingsitebackend.payload.siteObjects.PlaceRequest;
import weddingsitebackend.weddingsitebackend.payload.siteObjects.PlaceResponse;
import weddingsitebackend.weddingsitebackend.repository.siteObjects.PlaceRepo;

@Service
public class PlaceService {
    final
    PlaceRepo placeRepo;

    public PlaceService(PlaceRepo placeRepo) {
        this.placeRepo = placeRepo;
    }

    public ResponseEntity<?> update(PlaceRequest placeRequest){
        Place place = placeRepo.getOne(placeRequest.getId());
        place.setPlace(placeRequest.getPlace());
        placeRepo.save(place);
        return ResponseEntity.ok().body(new ApiResponse(true, "Место проведения было обновлено"));
    }
    public PlaceResponse getPlace(){
        Place place = placeRepo.getOne((long)1);
        PlaceResponse placeResponse = new PlaceResponse(place.getId(),place.getPlace());
        return placeResponse;
    }
}
