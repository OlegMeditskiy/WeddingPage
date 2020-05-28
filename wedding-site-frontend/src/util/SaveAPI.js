import {API_BASE_URL} from "../constants";
import {request, requestFile} from "./APIUtils";

export function updateAboutUs(updateAboutUsRequest) {
    return request({
        url: API_BASE_URL + "/admin/update/aboutUs",
        method: 'POST',
        body: JSON.stringify(updateAboutUsRequest)
    });

}
export function updateDressCode(updateDressCodeRequest) {
    return request({
        url: API_BASE_URL + "/admin/update/dressCode",
        method: 'POST',
        body: JSON.stringify(updateDressCodeRequest)
    });

}
export function updateInvitationText(updateInvitationTextRequest) {
    return request({
        url: API_BASE_URL + "/admin/update/invitationText",
        method: 'POST',
        body: JSON.stringify(updateInvitationTextRequest)
    });

}
export function updatePersonalInvitation(updatePersonalInvitationRequest) {
    return request({
        url: API_BASE_URL + "/admin/update/personalInvitation",
        method: 'POST',
        body: JSON.stringify(updatePersonalInvitationRequest)
    });

}

export function updatePlace(updatePlaceRequest) {
    return request({
        url: API_BASE_URL + "/admin/update/place",
        method: 'POST',
        body: JSON.stringify(updatePlaceRequest)
    });

}

export function updateStory(updateStoryRequest) {
    return request({
        url: API_BASE_URL + "/admin/update/story",
        method: 'POST',
        body: JSON.stringify(updateStoryRequest)
    });

}
export function updateDate(updateDateRequest) {
    return request({
        url: API_BASE_URL + "/admin/update/weddingDate",
        method: 'POST',
        body: JSON.stringify(updateDateRequest)
    });

}



export function saveProtocol(file) {
    return requestFile({
        url: API_BASE_URL + "/associationAdmin/save/protocol",
        method: 'POST',
        body: file
    });
}


export function sendMailToGuest(sendMailRequest) {
    return request({
        url:API_BASE_URL+"/associationAdmin/save/sendMailToGuest",
        method:'POST',
        body: JSON.stringify(sendMailRequest)
    })
}
