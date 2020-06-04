package weddingsitebackend.weddingsitebackend.sevice;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import weddingsitebackend.weddingsitebackend.exception.AppException;
import weddingsitebackend.weddingsitebackend.models.users.Admin;
import weddingsitebackend.weddingsitebackend.models.users.User;
import weddingsitebackend.weddingsitebackend.models.users.constants.Role;
import weddingsitebackend.weddingsitebackend.models.users.constants.RoleName;
import weddingsitebackend.weddingsitebackend.payload.common.ApiResponse;
import weddingsitebackend.weddingsitebackend.payload.common.JwtAuthenticationResponse;
import weddingsitebackend.weddingsitebackend.payload.common.LoginRequest;
import weddingsitebackend.weddingsitebackend.payload.common.SignUpRequest;
import weddingsitebackend.weddingsitebackend.repository.user.RoleRepository;
import weddingsitebackend.weddingsitebackend.repository.user.UserRepository;
import weddingsitebackend.weddingsitebackend.security.JwtTokenProvider;

import java.net.URI;
import java.util.LinkedHashSet;
import java.util.Set;


public interface AuthService {
    ResponseEntity<?> authenticateUser(LoginRequest loginRequest);

    ResponseEntity<?> registerUser(SignUpRequest signUpRequest);
}
