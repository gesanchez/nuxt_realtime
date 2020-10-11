<template>
  <div class="the-login">
    <div class="container">
      <div class="row">
        <div class="col">
          <ValidationObserver ref="form">
            <form novalidate @submit="doLogin($event)">
              <div>
                <h4>Acceso al Chat Room</h4>
              </div>
              <div class="form-group mt-3">
                <ValidationProvider v-slot="{ errors }" name="Username" rules="required|min:2">
                  <input v-model="username" type="text" class="form-control" maxlength="20" placeholder="username"/>
                   <span class="input-invalid-message">
                    {{ errors[0] }}
                  </span>
                </ValidationProvider>
              </div>
              <div class="form-group mt-5">
                <button class="btn btn--primary btn-block" :disabled="isLogin" type="submit">Entrar</button>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { Component, Vue, Emit } from 'nuxt-property-decorator'
import { Action, Getter } from 'vuex-class'

@Component({
  components: {
    ValidationObserver,
    ValidationProvider
  }
})
export default class TheLogin extends Vue {
  private username: string = ''
  @Getter('chat/ISLOGIN') isLogin: boolean
  @Action('chat/JOINUSER') join: (username: string) => Promise<string>

  $refs!: {
    form: InstanceType<typeof ValidationObserver>;
  }

  private async doLogin (e: any): Promise<void> {
    if (e) {
      e.preventDefault()
    }
    const result = await this.$refs.form.validate()
    if (result && !this.isLogin) {
      await this.join(this.username);
      this.$router.push('/chat')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/sass/mixins';
@import '@/assets/sass/variables';

$wrap: 'the-login';

.#{$wrap} {
  padding: 20px;
  background-color: $color-white;
  @include box-shadow($shadow-box);
}
</style>