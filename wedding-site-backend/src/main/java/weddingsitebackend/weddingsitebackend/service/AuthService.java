package weddingsitebackend.weddingsitebackend.service;

import org.springframework.http.ResponseEntity;
import weddingsitebackend.weddingsitebackend.payload.common.LoginRequest;
import weddingsitebackend.weddingsitebackend.payload.common.SignUpRequest;


public interface AuthService {
    ResponseEntity<?> authenticateUser(LoginRequest loginRequest);

    ResponseEntity<?> registerUser(SignUpRequest signUpRequest);
}
