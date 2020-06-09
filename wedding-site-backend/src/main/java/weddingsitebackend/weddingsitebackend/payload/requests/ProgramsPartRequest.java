package weddingsitebackend.weddingsitebackend.payload.requests;

import lombok.Getter;

@Getter
public class ProgramsPartRequest {

    private Long id;

    private String programsText;

    private String startTime;

    private String finishTime;


}
