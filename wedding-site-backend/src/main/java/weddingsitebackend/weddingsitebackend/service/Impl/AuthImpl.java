package weddingsitebackend.weddingsitebackend.service.Impl;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
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
import weddingsitebackend.weddingsitebackend.service.AuthService;

import java.net.URI;
import java.util.LinkedHashSet;
import java.util.Set;

@Service
public class AuthImpl implements AuthService {
    final
    AuthenticationManager authenticationManager;

    final
    UserRepository userRepository;

    final
    RoleRepository roleRepository;

    final
    PasswordEncoder passwordEncoder;

    final
    JwtTokenProvider tokenProvider;

    public AuthImpl(AuthenticationManager authenticationManager, UserRepository userRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder, JwtTokenProvider tokenProvider) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.tokenProvider = tokenProvider;
    }

    @Override
    public ResponseEntity<?> authenticateUser(LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = tokenProvider.generateToken(authentication);
        return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
    }

    @Override
    public ResponseEntity<?> registerUser(SignUpRequest signUpRequest) {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return new ResponseEntity<>(new ApiResponse(false, "Email Address already in use!"),
                    HttpStatus.BAD_REQUEST);
        }
        Admin user = new Admin(signUpRequest.getUsername(), signUpRequest.getPassword());

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        Set<Role> roles = new LinkedHashSet<>();
        Role userRole = roleRepository.findByName(RoleName.ROLE_USER)
                .orElseThrow(() -> new AppException("User Role not set."));
        roles.add(userRole);
        userRole = roleRepository.findByName(RoleName.ROLE_ADMIN)
                .orElseThrow(() -> new AppException("User Role not set."));
        roles.add(userRole);
        user.setRoles(roles);


        User result = userRepository.save(user);

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/users/{username}")
                .buildAndExpand(result.getUsername()).toUri();

        return ResponseEntity.created(location).body(new ApiResponse(true, "User registered successfully"));
    }
}
