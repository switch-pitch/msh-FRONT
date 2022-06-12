import React from "react"
import EventsMap from "../components/common/Map/Map"
import TmpCalendarCall from "../components/TmpCalendarModal/tmpCalendarCall/tmpCalendarCall"
import TmpUpload from "../components/tmpUpload/TmpUpload"
import AuthorizationPage from "../pages/AuthorizationPage/AuthorizationPage"
import ChatsPage from "../pages/ChatsPage/ChatsPage"
import EventsPage from "../pages/EventsPage/EventsPage"
import MainPage from "../pages/MainPage/MainPage"
import NotFoundPage from "../pages/NotFound/NotFoundPage"
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage"

export const routes = {
  mainPage: {
    path: "/",
    component: <MainPage />,
  },
  notFoundPage: {
    path: "*",
    component: <NotFoundPage />,
  },
  eventsPage: {
    path: "/events",
    component: <EventsPage />,
  },
  eventsMap: {
    path: "/eventsMap",
    component: <EventsMap />,
  },
  registrationPage: {
    path: "/register",
    component: <RegistrationPage />,
  },
  authorizationPage: {
    path: "/login",
    component: <AuthorizationPage />,
  },
  tmpUploadPage: {
    path: "/upload",
    component: <TmpUpload />,
  },
  tmpModal: {
    path: "/modal",
    component: <TmpCalendarCall />,
  },
  chatsPage: {
    path: "/chats",
    component: <ChatsPage />,
  },
}
