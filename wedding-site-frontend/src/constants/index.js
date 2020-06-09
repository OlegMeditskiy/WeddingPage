import LocalizedStrings from "react-localization";
import FlagIconFactory from 'react-flag-icon-css'
import * as React from 'react'

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';
export const ACCESS_TOKEN = 'accessToken';
export const LANGUAGE = 'LANGUAGE';

export let translation = new LocalizedStrings({
    en:{
        menu:{
            aboutUs:"About us",
            ourStory:"Our story",
            program:"Program",
            dressCode:"Dress code",
            place:"Place",
            invitation:"Invitation",
        },
        flatpickr:"English",
        save:"Save",
        edit:"Edit",
        delete:"Delete",
        fianceName:"Alexander",
        fianceeName:"Daria",
        directions:"Directions",
        answer:"You should answer before",
        contact:"To receive your personal invitation, contact fiance and fiancee.",
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
        errorMessage:"Error",
        name:"Name",
        text:"Text",
        newPart:"Create new programs part",
        maleDressCode:"Male dress code",
        femaleDressCode:"Female dress code",
        upload:"Upload",
        invitationText:"Invitation text",
        newInvitation:"Create new invitation",
        namesOfInvitees:"Names of invitees",
        table:{
            names:"Names",
            status:"Status",
            transfer:"Transfer",
            link:"Link",
            delete:"Delete"
        },
        beforeWedding:"Time before wedding:",
        accepted:"Accepted",
        declined:"Declined",
        not_answered:"Not answered",
        needTransfer:"Do you need transfer?",
        acceptButton:"Accept",
        declineButton:"Decline",
        acceptedMessage:"Сongratulations, you have accepted invitation! We are waiting for you on our wedding!",
        declinedMessage:"Unfortunately, you have declined invitation. If you change your mind, please, contact fiancee and fiance."

    },
    ru: {
        menu:{
            aboutUs:"О нас",
            ourStory:"Наша история",
            program:"Программа",
            dressCode:"Дресс-код",
            place:"Место проведения",
            invitation:"Приглашениe",
        },
        flatpickr:"Russian",
        edit:"Изменить",
        save:"Сохранить",
        delete:"Удалить",
        contact:"Чтобы получить ваше личное приглашение, напишите жениху и невесте.",
        answer:"Вы должны ответить до",
        fianceName:"Александр",
        fianceeName:"Дарья",
        directions:"Проезд",
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
        errorMessage:"Упс!",
        name:"Имя",
        text:"Текст",
        newPart:"Создать новое событие",
        maleDressCode:"Мужской дресс-код",
        femaleDressCode:"Женский дресс-код",
        upload:"Загрузить",
        invitationText:"Текст приглашения",
        newInvitation:"Создать новое приглашение",
        namesOfInvitees:"Имена приглашенных",
        table:{
            names:"Имена",
            status:"Статус",
            transfer:"Трансфер",
            link:"Ссылка",
            delete:"Удалить"
        },
        beforeWedding:"До свадьбы осталось:",
        accepted:"Дано согласие",
        declined:"Отказано",
        not_answered:"Не отвечено",
        needTransfer:"Нужен ли вам трансфер?",
        acceptButton:"Согласиться",
        declineButton:"Отказаться",
        acceptedMessage:"Поздравляем, вы приняли приглашение!. Мы ждем вас на нашей свадьбе!",
        declinedMessage:"К сожалению, вы отклонили ваше приглашение. Если вы поменяете своете решение, пожалуйста, свяжитесь с женихом и невестой."


    },
    sv: {
        menu:{
            aboutUs:"Om oss",
            ourStory:"Vår historia",
            program:"Program",
            dressCode:"Dress-code",
            place:"Plats",
            invitation:"Inbjudan",
        },
        flatpickr:"Swedish",
        edit:"Redigera",
        save:"Spara",
        delete:"Ta bort",
        contact:"För att få personlig inbjudan du måste kontakta brudgum och brud.",
        answer:"Du måste svara innan",
        fianceName:"Alexander",
        fianceeName:"Daria",
        directions:"Riktning",
        adminPanel:"Admin panel",
        homePage:"Huvudsidan",
        header:"Header",
        weddingDate:"Bröllops datum",
        aboutUs:"Om oss",
        ourStory:"Vår historia",
        program:"Program",
        dressCode:"Dress-code",
        place:"Plats",
        invitations:"Inbjudningar",
        support:"Kundservice",
        exit:"Logga ut",
        ckEditorLang:"sv",
        numberOfResponse:1,
        successMessage:"Succé",
        errorMessage:"Fel!",
        name:"Namn",
        text:"Text",
        newPart:"Skapa ny del av program",
        maleDressCode:"Manlig dress code",
        femaleDressCode:"Kvinlig dress code",
        upload:"Uppladda",
        invitationText:"Inbjudning text",
        newInvitation:"Skapa ny inbjudning",
        namesOfInvitees:"Namn av inbjudade personer",
        table:{
            names:"Namn",
            status:"Status",
            transfer:"Transfer",
            link:"Länk",
            delete:"Ta bort"
        },
        beforeWedding:"Tid innan bröllop:",
        accepted:"Bekräftad",
        declined:"Nekad",
        not_answered:"Har inte svarat",
        needTransfer:"Behöver du/ni transfer?",
        acceptButton:"Acceptera",
        declineButton:"Neka",
        acceptedMessage:"Gratis, du/ni har accepterat inbjudan! Vi väntar på er på vår bröllop!",
        declinedMessage:"Tyvär, du/ni har nekat inbjudan. Om du/ni du ändrar ditt/er beteende, snälla, kontakta brudgum och brud  you change your mind, please, contact fiancee and fiance."
    }
});

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