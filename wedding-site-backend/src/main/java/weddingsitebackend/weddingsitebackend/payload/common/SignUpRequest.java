package weddingsitebackend.weddingsitebackend.payload.common;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


public class SignUpRequest {
    @NotBlank
    @Size(max = 40)
    @Email
    private String username;


    @NotBlank
    @Size(min = 6, max = 20)
    private String password;



    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
