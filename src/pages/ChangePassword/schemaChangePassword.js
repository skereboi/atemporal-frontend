import * as yup from 'yup'

export const schemaChangePassword = yup.object({
  password: yup.string().min(8, 'Minimo 8 caracteres').required('La contraseña es requerida'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Las contraseñas no coinciden')
})
