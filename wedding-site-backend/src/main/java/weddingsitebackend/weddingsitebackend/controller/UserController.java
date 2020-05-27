package weddingsitebackend.weddingsitebackend.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import weddingsitebackend.weddingsitebackend.exception.ResourceNotFoundException;
import weddingsitebackend.weddingsitebackend.models.users.User;
import weddingsitebackend.weddingsitebackend.payload.common.UserIdentityAvailability;
import weddingsitebackend.weddingsitebackend.payload.common.UserProfile;
import weddingsitebackend.weddingsitebackend.payload.common.UserSummary;
import weddingsitebackend.weddingsitebackend.repository.user.UserRepository;
import weddingsitebackend.weddingsitebackend.security.CurrentUser;
import weddingsitebackend.weddingsitebackend.security.UserPrincipal;

@RestController
@RequestMapping("/api")
public class UserController {

    private final UserRepository userRepository;

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public UserSummary getCurrentUser(@CurrentUser UserPrincipal currentUser) {
        return new UserSummary(currentUser.getId(), currentUser.getUsername(), currentUser.getAuthorities());
    }

    @GetMapping("/user/checkUsernameAvailability")
    public UserIdentityAvailability checkUsernameAvailability(@RequestParam(value = "username") String username) {
        Boolean isAvailable = !userRepository.existsByUsername(username);
        return new UserIdentityAvailability(isAvailable);
    }

    @GetMapping("/users/{username}")
    public UserProfile getUserProfile(@PathVariable(value = "username") String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("User", "username", username));

        return new UserProfile(user.getId(), user.getUsername(), user.getCreatedAt());
    }



}
