import { StateChat } from './interfaces'
import { Message } from '@/interfaces/message'

export default {
  SETLOADING( state: StateChat, status: boolean) {
    state.isLogin = status
  },
  SETUSER(state: StateChat, username: string) {
    state.actUser = username
  },
  SETUSERS(state: StateChat, payload: Array<string>) {
    state.users = payload
  },
  ADDUSER(state: StateChat, username: string) {
    state.users = state.users.concat(username);
  },
  SETMESSAGES(state: StateChat, payload: Array<Message>) {
    state.messages = payload
  },
  ADDMESSAGES(state: StateChat, message: Message) {
    state.messages = state.messages.concat(message)
  }
}