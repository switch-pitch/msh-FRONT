import React, { FC, useEffect, useState } from "react"
import Button from "../../components/common/Button/Button"
import Input from "../../components/common/Input/Input"
import "./ChatsPage.scss"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { mockChats } from "../../mocks/chats"
import { IChat } from "../../models/chat"
import { ACTION_get_all_chats } from "../../redux/actions/chatActions"
import { ACTION_send_message } from "../../redux/actions/messageActions"

const d4rsen = "https://avatars.githubusercontent.com/u/89852964?v=4"
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const ChatsPage: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(ACTION_get_all_chats)
  }, [])
  const [user] = useState(true)
  const [companion] = useState(false)
  const [current, setCurrent] = useState(1)
  const chat = useAppSelector((state) => state.chat)
  const [value, setValue] = useState("")

  const onChangeHandler = function (event: any) {
    setValue(event.target.value)
  }

  const sendMessageHandler = function () {
    dispatch(ACTION_send_message(value))
  }

  useEffect(() => {
    chat && console.log(chat)
  }, [])
  const currentHandler = (n: number) => setCurrent(n)

  return (
    <div className="chats">
      <div className="chats__left contacts">
        <div className="contacts">
          <div className="contacts__top">
            <Input placeholder="Search" />
          </div>
          <div className="contacts__bottom">
            {chat &&
              chat.map((el: IChat) => (
                <div
                  key={el.id}
                  onClick={() => currentHandler(el.id)}
                  className={
                    el.id === current
                      ? "contacts__item contact contact--active"
                      : "contacts__item contact"
                  }
                >
                  <img src={d4rsen} alt="contact" className="contact__img" />
                  <div className="contact__mid">
                    <h4 className="contact__name">darsen</h4>
                    <h5 className="contact__message-preview">
                      Lorem ipsum dolor sit.
                    </h5>
                  </div>
                  <div className="contact__right">
                    <div className="contact__time">11:22</div>
                    {(el.id === 1 || el.id === 3) && (
                      <div className="contact__alert">1</div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="chats__right messages">
        <div className="messages__top">
          <img
            src={d4rsen}
            alt="contact"
            className="contact__img contact__img--big"
          />
          <h4 className="contact__name">darsen</h4>
        </div>
        <div className="messages__mid">
          {mockChats.map((el) => (
            <div
              key={el.time}
              className={
                el.message === "нормально"
                  ? "messages__message message message--user"
                  : "messages__message message"
              }
            >
              {el.message !== "нормально" && (
                <img src={d4rsen} alt="contact" className="contact__img" />
              )}
              <div className="message__mid">
                <div className="message__text">{el.message}</div>
                <div className="message__time">{el.time}</div>
              </div>
              {el.message === "нормально" && (
                <img src={d4rsen} alt="contact" className="contact__img" />
              )}
            </div>
          ))}
        </div>
        <div className="messages__bottom">
          <div className="messages__input">
            <Input
              placeholder="Type something here"
              value={value}
              onChange={onChangeHandler}
            />
          </div>
          <div className="messages__button">
            <Button
              text={"Send Message"}
              onClick={() => sendMessageHandler()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatsPage
