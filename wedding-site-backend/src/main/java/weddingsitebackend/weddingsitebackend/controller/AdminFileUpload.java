package weddingsitebackend.weddingsitebackend.controller;

import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import weddingsitebackend.weddingsitebackend.service.StorageService;

@RestController
@RequestMapping("/api/admin")
public class AdminFileUpload {

    final StorageService storageService;

    public AdminFileUpload(StorageService storageService) {
        this.storageService = storageService;
    }


    @GetMapping(value = "/files/{filename:.+}",produces = MediaType.IMAGE_JPEG_VALUE)
    @ResponseBody
    public ResponseEntity<Resource> serveFile(@PathVariable String filename) {
        Resource file = storageService.loadAsResource(filename);
        return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION,
                "inline; filename=\"" + file.getFilename() + "\"").body(file);
    }

}
