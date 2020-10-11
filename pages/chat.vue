<template>
  <div class="chat">
    <UsersPanel />
    <TheHeader />
    <InputSender />
    <div class="container-fluid">
      <div class="row" v-total-height>
        <div class="col-12">
          <div v-for="(element, index) in messages" :key="index">
            <TheBubble :message="element"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Action, Getter } from "vuex-class";
import TotalHeight from '@/directives/total-height'
import { Message } from '@/interfaces/message'

@Component({
    middleware: 'isAuthenticated',
    directives: {
      'total-height': TotalHeight
    }
})
export default class Chat extends Vue {
  @Action(`chat/RECONNECT`) join: () => void
  @Action('chat/GETUSERS') getUsers: () => void
  @Getter('chat/GETMESSAGES') messages: Array<Message>
  created() {
    this.join();
    this.getUsers();
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/sass/mixins';
@import '@/assets/sass/variables';

$wrap: 'chat';

.#{$wrap} {
  padding-left: 300px;
  padding-bottom: 70px;
  padding-top: 70px;
  overflow-x: auto;
}
</style>
