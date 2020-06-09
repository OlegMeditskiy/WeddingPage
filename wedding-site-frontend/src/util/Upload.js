import {requestFile} from "./APIUtils";
import {API_BASE_URL} from "../constants";

export function uploadPhotoToPerson(file) {
    return requestFile({
        url: API_BASE_URL + "/admin/update/photo",
        method: 'POST',
        body: file
    })
}
export function uploadPhotoMale(file) {
    return requestFile({
        url: API_BASE_URL + "/admin/update/photoMale",
        method: 'POST',
        body: file
    })
}
export function uploadPhotoFemale(file) {
    return requestFile({
        url: API_BASE_URL + "/admin/update/photoFemale",
        method: 'POST',
        body: file
    })
}