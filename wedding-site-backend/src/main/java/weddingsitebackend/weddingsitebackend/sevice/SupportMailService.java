package weddingsitebackend.weddingsitebackend.sevice;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import weddingsitebackend.weddingsitebackend.payload.SupportRequest;
import weddingsitebackend.weddingsitebackend.payload.common.ApiResponse;

@Service
public class SupportMailService {
    final EmailService emailService;

    public SupportMailService(EmailService emailService) {
        this.emailService = emailService;
    }

    public ResponseEntity<?> sendMailToSupport(SupportRequest supportRequest) {
        System.out.println(supportRequest);
            String to = "olegmeditskiyprivate@gmail.com";
            String subject = "Обращение №1";
            String text = supportRequest.getText();
            emailService.sendSimpleMessage(to, subject, text);
            String to2 = supportRequest.getEmail();
            String subject2 = "Обращение №1";
            String text2 = "Спасибо за обращение, "+supportRequest.getName()+"! \nНомер вашего обращения - 1 \nВ скором времени мы с вами свяжемся.";
            emailService.sendSimpleMessage(to2, subject2, text2);

        return ResponseEntity.ok().body(new ApiResponse(true, "Mail was send"));
    }
}
