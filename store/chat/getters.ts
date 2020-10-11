import { StateChat } from './interfaces';
import { filter } from 'lodash';

export default {
  ISLOGIN(state: StateChat): boolean {
    return state.isLogin
  },
  GETUSER(state: StateChat): string {
    return state.actUser
  },
  GETUSERS(state: StateChat): Array<string> {
    return filter(state.users, (x: string) => {
      return x !== state.actUser;
    })
  }
}