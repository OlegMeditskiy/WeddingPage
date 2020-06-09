import {API_BASE_URL} from "../constants";
import {request} from "./APIUtils";

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
export function accept(acceptRequest) {
    return request({
        url: API_BASE_URL + "/invitation/accept",
        method: 'POST',
        body: JSON.stringify(acceptRequest)
    });

}
export function decline(declineRequest) {
    return request({
        url: API_BASE_URL + "/invitation/decline",
        method: 'POST',
        body: JSON.stringify(declineRequest)
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
export function updateProgramsPart(updateProgramsPart) {
    return request({
        url: API_BASE_URL + "/admin/update/programsPart",
        method: 'POST',
        body: JSON.stringify(updateProgramsPart)
    });

}
export function updateDate(updateDateRequest) {
    return request({
        url: API_BASE_URL + "/admin/update/weddingDate",
        method: 'POST',
        body: JSON.stringify(updateDateRequest)
    });

}

