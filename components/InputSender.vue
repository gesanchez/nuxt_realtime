<template>
    <div class="input-sender">
      <div class="container-fluid">
        <div class="row">
          <div class="col-11 input-sender__sender-container">
            <textarea v-model="message" @keyup.enter="sendMessage" type="text" class="form-control" placeholder="Escriba su mensaje y presione enter"></textarea>
          </div>
          <div class="col-1 text-center">
            <span class="material-icons" @click="sendMessage">send</span>
          </div>
        </div>
      </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Action, Getter } from "vuex-class";

@Component
export default class InputSender extends Vue {
  private message: string = ''
  @Action('chat/SENDMESSAGE') send: (message) => void
  private sendMessage(): void {
    if (this.message.trim()) {
      this.send(this.message.trim())
      this.message = ''
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/sass/mixins';
@import '@/assets/sass/variables';

$wrap: 'input-sender';

.#{$wrap} {
  background-color: $color-white;
  color: $color-primary;
  height: 49px;
  bottom: 0px;
  width: 100%;
  padding-left: 300px;
  right: 0px;
  position: fixed;
  z-index: 1;
  & .material-icons {
    margin-top: 13px;
    vertical-align: middle;
    display: inline-block;
    cursor: pointer;
  }
  &__sender-container {
    padding-top: 10px;
  }
  & .form-control {
    border: 0px;
    height: 30px;
    resize: none;
  }
}
</style>