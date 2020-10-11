import { StateChat } from './interfaces'
import { Message } from '@/interfaces/message'

export default {
  /**
   * JOINUSER
   * 
   * @description Metodo para realizar login
   */
  JOINUSER({ state, commit }: { state: StateChat, commit: any }, username: string): Promise<string> {
    commit('SETLOADING', true)
    return new Promise((resolve, reject) => {
      this.$socket.emit("joinRoom", username, (res) => {
        if (res) {
          commit('SETUSER', res)
          this.$auth.$storage.setUniversal("username", res)
        }
        commit('SETLOADING', false)
        resolve(res)
      });
    })
  },
  /**
   * RECONNECT
   * 
   * @description Metodo para ser llamada cuando se refresca la pagina
   * dentro del chat
   */
  RECONNECT({ commit }: { commit: any }): void {
    const username = this.$auth.$storage.getUniversal("username")
    if (username) {
      commit('SETUSER', username)
      this.$socket.emit("reconnect", username)
    }

    this.$socket.on('user-connected', (users: Array<string>) => {
      commit('SETUSERS', users)
    });

    this.$socket.emit("get-messages", (messages: Array<Message>) => {
      commit('SETMESSAGES', messages)
    });

    this.$socket.on('message', (msg: Message) => {
      commit('ADDMESSAGES', msg)
    });

  },
  /**
   * GETUSERS
   * 
   * @description Metodo para retornar los usuarios conectados
   */
  GETUSERS({ commit }: { commit: any }): void {
    this.$socket.emit("get-users", (res) => {
      commit('SETUSERS', res)
    });
  },
  /**
   * SENDMESSAGE
   * 
   * @description Metodo para enviar un mensaje al chat room
   */
  SENDMESSAGE({ commit }: { commit: any }, message: string): void {
    const username = this.$auth.$storage.getUniversal("username")
    const msg: Message = {
      username: username,
      message: message
    }
    this.$socket.emit('message', msg)
    commit('ADDMESSAGES', msg)
  },
  /**
   * LOGOUT
   * 
   * @description Metodo para salir de la sesion
   * @param param0 
   */
  LOGOUT({ commit }): void {
    commit('SETUSER', "")
    const username = this.$auth.$storage.getUniversal("username")
    this.$socket.emit('logout', username)
    this.$auth.$storage.removeUniversal("username")
  }
}