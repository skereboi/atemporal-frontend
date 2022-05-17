import * as yup from 'yup'

export const schemaCreateUser = yup.object({
  nombre: yup.string().required('El nombre es requerido'),
  celular: yup.string().max(10).min(10, 'Ingresa un número celular a 10 digitos').required(),
  email: yup.string().email().required('El email es requerido'),
  password: yup.string().min(8, 'Minimo 8 caracteres').required('La contraseña es requerida')
})
