import * as yup from 'yup'

export const schemaUpdateUser = yup.object({
  nombre: yup.string()
    .required('El nombre es requerido'),
  celular: yup.string()
    .min(10, 'Ingresa un número celular a 10 digitos')
    .max(10, 'Máximo 10 digitos')
    .required(),
  email: yup.string()
    .email()
    .required('El email es requerido')
})
