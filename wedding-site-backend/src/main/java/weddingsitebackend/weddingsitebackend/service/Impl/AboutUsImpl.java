package weddingsitebackend.weddingsitebackend.service.Impl;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import weddingsitebackend.weddingsitebackend.models.siteObjects.AboutUs;
import weddingsitebackend.weddingsitebackend.payload.common.ApiResponse;
import weddingsitebackend.weddingsitebackend.payload.requests.AboutUsRequest;
import weddingsitebackend.weddingsitebackend.payload.responses.AboutUsResponse;
import weddingsitebackend.weddingsitebackend.repository.siteObjects.AboutUsRepo;
import weddingsitebackend.weddingsitebackend.service.AboutUsService;
import weddingsitebackend.weddingsitebackend.service.StorageService;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class AboutUsImpl implements AboutUsService {
    final
    AboutUsRepo aboutUsRepo;

    final StorageService storageService;

    public AboutUsImpl(AboutUsRepo aboutUsRepo, StorageService storageService) {
        this.aboutUsRepo = aboutUsRepo;
        this.storageService = storageService;
    }

    @Override
    public ResponseEntity<?> update(AboutUsRequest aboutUsRequest) {
        AboutUs aboutUs = aboutUsRepo.getOne(aboutUsRequest.getId());
        aboutUs.setAbout(aboutUsRequest.getAbout());
        aboutUs.setName(aboutUsRequest.getName());
        aboutUsRepo.save(aboutUs);
        return ResponseEntity.ok().body(new ApiResponse(true, "Раздел о " + aboutUsRequest.getName() + " был обновлен"));
    }

    @Override
    public List<AboutUsResponse> getAllAboutUs() {
        List<AboutUs> aboutUsList = aboutUsRepo.findAll();
        List<AboutUsResponse> aboutUsResponseList = new ArrayList<>();
        for (AboutUs aboutUs : aboutUsList) {
            AboutUsResponse aboutUsResponse = new AboutUsResponse(aboutUs.getId(), aboutUs.getName(), aboutUs.getAbout(),aboutUs.getPhotoName());
            aboutUsResponseList.add(aboutUsResponse);
        }
        return aboutUsResponseList;
    }

    @Override
    public ResponseEntity<?> photoUpload(MultipartFile file, AboutUsRequest aboutUsRequest) throws IOException {
        AboutUs aboutUs = aboutUsRepo.getOne(aboutUsRequest.getId());
        if (aboutUs.getPhotoName()!=null){ storageService.delete(aboutUs.getPhotoName());}
        UUID uniqueKey = UUID.randomUUID();
        String photoName=storageService.saveAsString(file,uniqueKey.toString());
        aboutUs.setPhotoName(photoName);
        aboutUsRepo.save(aboutUs);
        return ResponseEntity.ok().body(new ApiResponse(true, "Photo was updated"));
    }

}
