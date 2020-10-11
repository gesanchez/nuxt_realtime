import { StateChat } from './interfaces';

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
  SETMESSAGES(state: StateChat, payload: Array<string>) {
    state.messages = payload
  }
}