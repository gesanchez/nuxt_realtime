import { extend } from 'vee-validate'
import { required, min } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'Este campo es requerido'
})

extend('min', {
  ...min,
  message: (fieldName, placeholders) => {
    return `Este campo debe tener como minimo ${placeholders.length} caracteres`;
  }
});