import { Middleware } from '@nuxt/types'

const isAuthenticated: Middleware = (context: any) => {
  const token = context.$auth.$storage.getUniversal("username")
  if (!token) {
    context.redirect('/')
  }
}

export default isAuthenticated