package weddingsitebackend.weddingsitebackend.sevice;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import weddingsitebackend.weddingsitebackend.models.siteObjects.AboutUs;
import weddingsitebackend.weddingsitebackend.payload.common.ApiResponse;
import weddingsitebackend.weddingsitebackend.payload.siteObjects.AboutUsRequest;
import weddingsitebackend.weddingsitebackend.payload.siteObjects.AboutUsResponse;
import weddingsitebackend.weddingsitebackend.repository.siteObjects.AboutUsRepo;

import java.util.ArrayList;
import java.util.List;

@Service
public class AboutUsService {
    final
    AboutUsRepo aboutUsRepo;

    public AboutUsService(AboutUsRepo aboutUsRepo) {
        this.aboutUsRepo = aboutUsRepo;
    }

    public ResponseEntity<?> update(AboutUsRequest aboutUsRequest) {
        AboutUs aboutUs = aboutUsRepo.getOne(aboutUsRequest.getId());
        aboutUs.setAbout(aboutUsRequest.getAbout());
        aboutUs.setName(aboutUsRequest.getName());
        aboutUsRepo.save(aboutUs);
        return ResponseEntity.ok().body(new ApiResponse(true, "Раздел о " + aboutUsRequest.getName() + " был обновлен"));
    }

    public List<AboutUsResponse> getAllAboutUs() {
        List<AboutUs> aboutUsList = aboutUsRepo.findAll();
        List<AboutUsResponse> aboutUsResponseList =new ArrayList<>();
        for(AboutUs aboutUs:aboutUsList){
            AboutUsResponse aboutUsResponse = new AboutUsResponse(aboutUs.getId(),aboutUs.getName(),aboutUs.getAbout());
            aboutUsResponseList.add(aboutUsResponse);
        }
        return aboutUsResponseList;
    }
}
