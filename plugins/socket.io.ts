import { Plugin } from '@nuxt/types'
import socketio from 'socket.io-client';
import { Socket } from 'socket.io';


declare module 'vue/types/vue' {
  interface Vue {
    $socket: Socket
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $socket: any
  }
  interface Context {
    $socket: Socket
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $socket: Socket
  }
}

const SocketIO: Plugin = (context, inject) => {
  const SocketInstance = socketio(context.$config.socketUrl)
  inject('socket', SocketInstance)
}

export default SocketIO