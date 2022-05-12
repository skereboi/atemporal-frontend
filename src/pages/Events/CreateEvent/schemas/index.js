import * as yup from 'yup'

export const SchemaOrganizer = yup.object({
  nombre_organizador:
    yup.string()
      .required('Campo obligatorio'),
  celular_principal:
    yup.string()
      .max(10, 'Máximo 10 digitos')
      .min(10, 'Ingresa un número válido a 10 digitos')
      .required('Campo obligatorio'),
  celular_secundario:
    yup.string()
      .max(10, 'Máximo 10 digitos')
      .min(10, 'Ingresa un número válido a 10 digitos')
      .required('Campo obligatorio')
})

export const SchemaEvent = yup.object({
  nombre_evento:
    yup.string()
      .required('Campo obligatorio'),
  descripcion:
    yup.string()
      .required('Campo obligatorio'),
  fecha_evento:
    yup.date()
      .required('Campo obligatorio'),
  hora_inicio:
    yup.string()
      .length(5, 'Hora inválida')
      .matches(/(\d){2}:(\d){2}/, 'La hora debe contener este formato "00:00"')
      .required('Campo obligatorio'),
  hora_final:
    yup.string()
      .length(5, 'Hora inválida')
      .matches(/(\d){2}:(\d){2}/, 'La hora debe contener este formato "00:00"')
      .required('Campo obligatorio'),
  lugar:
    yup.string()
      .required('Campo obligatorio'),
  ubicacion_maps:
    yup.string(),
  foto_evento:
    yup.string()
      .required('Campo obligatorio'),
  direccion:
    yup.string().required('Campo obligatorio'),
  url_video:
    yup.string().required('Campo obligatorio'),
  itinerario_evento:
    yup.string(),
  categorias:
    yup.array()
      .of(yup.object({
        id: yup.string()
      }, 'Debes selecciona una categoria'))
      .required('Campo obligatorio') // Ejemplo categorias [{id: 1}, {id: 2}, {id: 10}]
})

export const SchemaTickets = yup.object({
  tipo_cobro:
    yup.boolean(),
  metodos_pago:
    yup.array()
      .of(yup.object({
        id: yup.string()
      }, 'Debes selecciona una categoria')),
  // Ejemplo metodo de pago [{id: 1}, {id: 2}, {id: 10}]
  boletos: yup
    .array()
    .of(
      yup.object({
        nombre:
          yup.string(),
        cantidad:
          yup.string(),
        precio:
          yup.string()
      }))
})

export const SummaryTicket = yup.object({
  acepto_terminos:
    yup.boolean()
      .oneOf([true], 'Debes aceptar los términos y condiciones')
})
