<template>
  <div class="container">
    <div class="row justify-content-center align-items-center" v-total-height>
      <div class="col-lg-4 col-md-6 col-12">
        <TheLogin />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Action } from "vuex-class";
import TotalHeight from '@/directives/total-height'

@Component({
  directives: {
    'total-height': TotalHeight
  }
})
export default class Index extends Vue {
}
</script>
