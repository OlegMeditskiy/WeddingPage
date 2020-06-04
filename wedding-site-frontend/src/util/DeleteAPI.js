import {API_BASE_URL} from "../constants";
import {request} from "./APIUtils";

export function deleteProgramsPart(deleteProgramsPartRequest) {
    return request({
        url: API_BASE_URL + "/admin/delete/programsPart",
        method: 'DELETE',
        body: JSON.stringify(deleteProgramsPartRequest)
    })
}
export function deletePersonalInvitation(deletePersonalInvitationRequest) {
    return request({
        url: API_BASE_URL + "/admin/delete/personalInvitation",
        method: 'DELETE',
        body: JSON.stringify(deletePersonalInvitationRequest)
    })
}
