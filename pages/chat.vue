<template>
  <div class="chat">
    <UsersPanel />
    <TheHeader />
    <InputSender />
    <div class="container-fluid">
      <div class="row">
        <div class="col-12" id="container">
          <div v-for="(element, index) in messages" :key="index">
            <TheBubble :message="element"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'nuxt-property-decorator'
import { Action, Getter } from "vuex-class";
import TotalHeight from '@/directives/total-height'
import { Message } from '@/interfaces/message'
import * as $ from 'jquery-slim';

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
  @Watch('messages')
  private changedMessage() {
    this.$nextTick(() => {
      const total = $(window).scrollTop() + $("#container").height();
      window.scrollTo(0, total);
    })
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
