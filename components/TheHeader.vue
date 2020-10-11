<template>
    <div class="the-header">
      <div class="container-fluid">
        <div class="row justify-content-end">
          <div class="col-lg-3 col-6 text-right">
            <span class="the-header__name">@{{ user }}</span>
            <span class="material-icons" @click="logout">power_settings_new</span>
          </div>
        </div>
      </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Action, Getter } from "vuex-class";

@Component
export default class TheHeader extends Vue {
  @Getter('chat/GETUSER') user:string
  @Action('chat/LOGOUT') logoutSession: () => void
  private logout(): void {
    this.logoutSession()
    this.$router.push('/')
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/sass/mixins';
@import '@/assets/sass/variables';

$wrap: 'the-header';

.#{$wrap} {
  background-color: $color-white;
  color: $color-primary;
  height: 49px;
  top: 0px;
  width: 100%;
  padding-left: 300px;
  right: 0px;
  position: fixed;
  padding-top: 10px;
  z-index: 1;
  &__name {
    vertical-align: middle;
    display: inline-block;
    margin-right: 10px;
  }
  & .material-icons {
    vertical-align: middle;
    display: inline-block;
    cursor: pointer;
  }
}
</style>