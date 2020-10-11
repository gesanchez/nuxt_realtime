<template>
  <div>
    <UsersPanel />
    <TheHeader />
    <div class="container-fluid">
      <div class="row" v-total-height>
        <div class="col-4"></div>
        <div class="col-8">chat</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Action } from "vuex-class";
import TotalHeight from '@/directives/total-height'

@Component({
    middleware: 'isAuthenticated',
    directives: {
      'total-height': TotalHeight
    }
})
export default class Chat extends Vue {
  @Action(`chat/RECONNECT`) join: () => void;
  @Action('chat/GETUSERS') getUsers: () => void;
  created() {
    this.join();
    this.getUsers();
  }
}
</script>

<style>
</style>
