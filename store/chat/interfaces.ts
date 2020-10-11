import { Message } from '@/interfaces/message'

export interface StateChat {
  users: Array<any>;
  messages: Array<Message>;
  isLogin: boolean;
  actUser: string;
}