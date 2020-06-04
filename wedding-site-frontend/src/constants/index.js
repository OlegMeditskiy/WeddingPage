import LocalizedStrings from "react-localization";
import FlagIconFactory from 'react-flag-icon-css'
import * as React from 'react'

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';
export const ACCESS_TOKEN = 'accessToken';
export const LANGUAGE = 'LANGUAGE';

export let menuHeaders = new LocalizedStrings({
    en:{
        adminPanel:"Admin panel",
        homePage:"Home page",
        header:"Header",
        weddingDate:"Wedding date",
        aboutUs:"About us",
        ourStory:"Our story",
        program:"Program",
        dressCode:"Dress code",
        place:"Place",
        invitations:"Invitations",
        support:"Support",
        exit:"Logout",
        ckEditorLang:"en",
        numberOfResponse:2,
        successMessage:"Success",
        errorMessage:"Error"
    },
    ru: {
        adminPanel:"Панель администратора",
        homePage:"Домашняя страница",
        header:"Шапка",
        weddingDate:"Дата свадьбы",
        aboutUs:"О нас",
        ourStory:"Наша история",
        program:"Программа",
        dressCode:"Дресс-код",
        place:"Место проведения",
        invitations:"Приглашения",
        support:"Техническая поддержка",
        exit:"Выйти",
        ckEditorLang:"ru",
        numberOfResponse:1,
        successMessage:"Успешно",
        errorMessage:"Упс!"
    }
});

export const ASSOCIATION_LIST_SIZE = 30;
const FlagIcon = FlagIconFactory(React, { useCssModules: false })
export const returnReadOrEdit=(read, edit, show)=>{
    if (show){
        return (
            <div>
                {read()}
            </div>)
    }
    else {
        return(<div>
            {edit()}
        </div>)
    }
}
export default FlagIcon;