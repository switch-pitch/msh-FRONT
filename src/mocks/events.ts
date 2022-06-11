import { IEvent } from "../models/event"
import { category } from "../models/redux"

export const mockEvents: IEvent[] = [
  {
    id: 1,
    skills: null,
    coordinates: [
      {
        latitude: 123,
        longitude: 123,
      },
    ],
    tags: ["#тег1", "#тег2"],
    type: "какой-то",
    title: "Помощь бабушке",
    category: "помощь",
    location: "Россия",
    focus_group: "Волонтерство",
    date_and_time: "08.01.2022",
    application_response_email: "123@123.ru",
    urgent: 4,
    reward: 1500,
    is_online: true,
    img: "https://dobro.ru/_next/image?url=https%3A%2F%2Fstorage.yandexcloud.net%2Fdobro-static%2Fprod%2Fimages%2Fa295795f-9d0e-2ec4-393f-8c01f1abc3e0.png&w=3840&q=75",
  },
  {
    id: 2,
    skills: null,
    coordinates: [
      {
        latitude: 123,
        longitude: 123,
      },
    ],
    tags: ["#тег1", "#тег2", "#тег3"],
    type: "Тип",
    title: "Помощь дедушке",
    category: "помощь",
    location: "Москва",
    focus_group: "Молодые люди",
    date_and_time: "03.01.2022",
    application_response_email: "123@123.ru",
    urgent: 2,
    reward: 2500,
    is_online: false,
    img: "https://dobro.ru/_next/image?url=https%3A%2F%2Fstorage.yandexcloud.net%2Fdobro-static%2Fprod%2Fimages%2F1d4a3c66-344a-b6fa-2a6e-e4d43d01c39d.jpg&w=3840&q=75",
  },
  {
    id: 3,
    skills: null,
    coordinates: [
      {
        latitude: 123,
        longitude: 123,
      },
    ],
    type: "Тип",
    tags: ["#тег1", "#тег2", "#тег3"],
    title: "Помощь дедушке",
    category: "помощь",
    location: "Москва",
    focus_group: "Молодые люди",
    date_and_time: "03.01.2022",
    application_response_email: "123@123.ru",
    urgent: 2,
    reward: 2500,
    is_online: false,
    img: "https://dobro.ru/_next/image?url=https%3A%2F%2Fstorage.yandexcloud.net%2Fdobro-static%2Fprod%2Fimages%2F1d4a3c66-344a-b6fa-2a6e-e4d43d01c39d.jpg&w=3840&q=75",
  },
  {
    id: 4,
    skills: null,
    coordinates: [
      {
        latitude: 123,
        longitude: 123,
      },
    ],
    type: "Тип",
    tags: ["#тег1", "#тег2", "#тег3"],
    title: "Помощь дедушке",
    category: "помощь",
    location: "Москва",
    focus_group: "Молодые люди",
    date_and_time: "03.01.2022",
    application_response_email: "123@123.ru",
    urgent: 2,
    reward: 2500,
    is_online: false,
    img: "https://dobro.ru/_next/image?url=https%3A%2F%2Fstorage.yandexcloud.net%2Fdobro-static%2Fprod%2Fimages%2F1d4a3c66-344a-b6fa-2a6e-e4d43d01c39d.jpg&w=3840&q=75",
  },
  {
    id: 5,
    skills: null,
    coordinates: [
      {
        latitude: 123,
        longitude: 123,
      },
    ],
    tags: ["#тег1", "#тег2", "#тег3"],
    type: "Тип",
    title: "Помощь дедушке",
    category: "помощь",
    location: "Москва",
    focus_group: "Молодые люди",
    date_and_time: "03.01.2022",
    application_response_email: "123@123.ru",
    urgent: 2,
    reward: 2500,
    is_online: false,
    img: "https://dobro.ru/_next/image?url=https%3A%2F%2Fstorage.yandexcloud.net%2Fdobro-static%2Fprod%2Fimages%2F1d4a3c66-344a-b6fa-2a6e-e4d43d01c39d.jpg&w=3840&q=75",
  },
]

export const categories: category[] = [
  {
    name: "help",
    active: false,
    title: "помощь",
  },
  { name: "long", active: false, title: "помощь" },
]
