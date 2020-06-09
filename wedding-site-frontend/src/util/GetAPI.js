import {ACCESS_TOKEN, API_BASE_URL} from "../constants";
import {request} from "./APIUtils";


export function getAllFiles() {
    return request({
        url: API_BASE_URL + "/associationAdmin/getAllFiles",
        method: 'GET'
    });
}
export function getFile(filename) {
    return request({
        url: "http://localhost:8080/api/admin/files/"+filename,
        method: 'GET'
    });
}

export function getAllAboutUs(signal) {
    return request({
        url: API_BASE_URL + "/admin/get/aboutUs",
        method: 'GET',
        signal:signal
    });
}
export function getDressCode(signal) {
    return request({
        url: API_BASE_URL + "/admin/get/dressCode",
        method: 'GET',
        signal:signal
    });
}
export function getInvitationText(signal) {
    return request({
        url: API_BASE_URL + "/admin/get/invitationText",
        method: 'GET',
        signal:signal
    });
}

export function getPlace(signal) {
    return request({
        url: API_BASE_URL + "/admin/get/place",
        method: 'GET',
        signal:signal
    });
}
export function getStory(signal) {
    return request({
        url: API_BASE_URL + "/admin/get/story",
        method: 'GET',
        signal:signal
    });
}
export function getWeddingDate(signal) {
    return request({
        url: API_BASE_URL + "/admin/get/weddingDate",
        method: 'GET',
        signal:signal
    });
}
export function getProgram(signal) {
    return request({
        url: API_BASE_URL + "/admin/get/program",
        method: 'GET',
        signal:signal
    });
}
export function getPersonalInvitations(signal) {
    return request({
        url: API_BASE_URL + "/admin/get/personalInvitations",
        method: 'GET',
        signal:signal
    });
}
export function getPersonalInvitation(key,signal) {
    return request({
        url: API_BASE_URL + "/admin/get/personalInvitation/"+key,
        method: 'GET',
        signal:signal
    });
}

export function getCurrentUser() {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

export function getUserProfile(username) {
    return request({
        url: API_BASE_URL + "/users/" + username,
        method: 'GET'
    });
}
