<template>
    <div class="user-panel">
      <div>
        <h4 class="text-center user-panel__panel-title">Usuarios conectados</h4>
      </div>
      <div v-if="listUsers.length > 0" class="user-panel__users">
        <ul>
          <li v-for="(item, index) in listUsers" :key="index">
            <span class="material-icons">face</span>
            <span class="user-panel__users__name">{{ item }}</span>
          </li>
        </ul>
      </div>
      <div v-if="listUsers.length == 0" class="user-panel__no-users text-center">
        <span class="material-icons">contact_support</span>
        <h5>No hay usuarios conectados</h5>
      </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Action, Getter } from "vuex-class";

@Component
export default class UsersPanel extends Vue {
  @Getter('chat/GETUSERS') listUsers: Array<string>
}
</script>
<style lang="scss" scoped>
@import '@/assets/sass/mixins';
@import '@/assets/sass/variables';

$wrap: 'user-panel';
.#{$wrap} {
  background-color: $color-primary;
  color: $color-white;
  position: fixed;
  overflow-x: auto;
  width: 300px;
  height: 100%;
  left: 0px;
  top: 0px;
  z-index: 2;
  &__panel-title {
    padding: 10px 20px 10px 20px;
    border-bottom: 1px solid $color-gray;
  }
  &__no-users {
    position: absolute;
    top: 50%;
    left: 0px;
    width: 300px;
    height: 100px;
    margin-top: -50px;
    padding-left: 20px;
    padding-right: 20px;
    & > span {
      font-size: 50px;
    }
  }
  &__users {
    & .material-icons {
      vertical-align: middle;
      display: inline-block;
    }
    &__name {
      vertical-align: middle;
      display: inline-block;
      margin-left: 5px;
    }
    & > ul {
      list-style: none;
      margin: 0px;
      padding: 0px;
      & > li {
        padding: 20px;
      }
    }
  }
}
</style>