import { StateChat } from './interfaces';

const state = (): StateChat => ({
  users: [],
  messages: [],
  isLogin: false,
  actUser: ''
})

export default state;
