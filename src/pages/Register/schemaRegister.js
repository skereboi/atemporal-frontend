import * as yup from 'yup'

export const schemaRegister = yup.object({
  nombre: yup.string().required('El nombre es requerido'),
  celular: yup.number('Debe ser un numero').positive('Ingresa un celular').test('len', 'Minimo 5', val => val.length < 5),
  email: yup.string().email().required('El email es requerido'),
  password: yup.string().min(8, 'Minimo 8 caracteres').required('La contraseña es requerida'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Las contraseñas no coinciden'),
  terminos: yup.boolean().oneOf([true], 'Debes aceptar los términos y condiciones')
})
