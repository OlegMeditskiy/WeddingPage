import {ACCESS_TOKEN, API_BASE_URL, ASSOCIATION_LIST_SIZE} from "../constants";
import {request} from "./APIUtils";

export function getAllAssociations(page, size) {
    page = page || 0;
    size = size || ASSOCIATION_LIST_SIZE;

    return request({
        url: API_BASE_URL + "/associations?page=" + page + "&size=" + size,
        method: 'GET'
    });
}

export function getAllFiles() {
    return request({
        url: API_BASE_URL + "/associationAdmin/getAllFiles",
        method: 'GET'
    });
}
export function getFile(filename) {
    return request({
        url: "http://localhost:8080/files/"+filename,
        method: 'GET'
    });
}

export function getAllAboutUs() {
    return request({
        url: API_BASE_URL + "/admin/get/aboutUs",
        method: 'GET'
    });
}
export function getDressCode() {
    return request({
        url: API_BASE_URL + "/admin/get/dressCode",
        method: 'GET'
    });
}
export function getInvitationText() {
    return request({
        url: API_BASE_URL + "/admin/get/invitationText",
        method: 'GET'
    });
}

export function getPlace() {
    return request({
        url: API_BASE_URL + "/admin/get/place",
        method: 'GET'
    });
}
export function getStory() {
    return request({
        url: API_BASE_URL + "/admin/get/story",
        method: 'GET'
    });
}
export function getWeddingDate() {
    return request({
        url: API_BASE_URL + "/admin/get/weddingDate",
        method: 'GET'
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
