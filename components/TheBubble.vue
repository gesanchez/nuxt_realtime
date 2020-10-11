<template>
  <div :class="{'text-right': message.username == user, 'text-left': message.username != user}">
    <div class="the-bubble" :class="{'the-bubble--me': message.username == user}">
      <div class="the-bubble__sender">
        <span v-if="message.username == user">Tu</span>
         <span v-if="message.username != user">{{ message.username }}</span>
      </div>
      <div class="the-bubble__message">{{ message.message }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Getter } from "vuex-class"
import { Message } from '@/interfaces/message'

@Component
export default class TheBubble extends Vue {
  @Prop({ required: true }) readonly message!: Message
  @Getter('chat/GETUSER') user: string
}
</script>
<style lang="scss" scoped>
@import '@/assets/sass/mixins';
@import '@/assets/sass/variables';

$wrap: 'the-bubble';
.#{$wrap} {
  position: relative;
	background: $color-white;
  border-radius: .4em;
  min-width: 100px;
  max-width: 250px;
  min-height: 50px;
  display: inline-block;
  margin-bottom: 20px;
  @include box-shadow($shadow-box);
  &__sender {
    padding: 10px 10px;
    font-style: italic;
    font-weight: bold;
    text-align: left;
    border-bottom: 1px solid $color-gray;
  }
  &__message {
    padding: 20px;
    font-size: 12px;
    text-align: left;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 14px solid transparent;
    border-top-color: $color-white;
    border-bottom: 0;
    border-left: 0;
    margin-left: -7px;
    margin-bottom: -14px;
  }
  &--me:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 14px solid transparent;
    border-top-color: $color-white;
    border-bottom: 0;
    border-right: 0;
    margin-left: -7px;
    margin-bottom: -14px;
  }
}
</style>