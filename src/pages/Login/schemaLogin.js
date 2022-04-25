import * as yup from 'yup'

export const schemaLogin = yup.object({
  email: yup.string().email('Debe ser un correo válido').required('El email es requerido'),
  password: yup.string().min(8, 'Revisa tu contraseña').required('La contraseña es requerida')
})
