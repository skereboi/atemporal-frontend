import * as yup from 'yup'

export const recoverPasswordSchema = yup.object({
  email: yup.string().email('Ingresa un correo válido').required('El email es requerido')
})
