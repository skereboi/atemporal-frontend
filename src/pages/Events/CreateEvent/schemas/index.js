import * as yup from 'yup'

const schemaTemplateOrganizer = {
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
}

const schemaTemplateEvent = {
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
    yup.mixed().test('required', 'Por favor sube una foto de tu evento', (value) => {
      return value && value.length
    }),
  direccion:
    yup.string().required('Campo obligatorio'),
  url_video:
    yup.string(),
  itinerario_evento:
    yup.string(),
  categorias:
    yup.array()
      .of(yup.object({
        id: yup.string()
      }, 'Debes selecciona una categoria'))
      .min(1, 'Selecciona al menos una categoria')
      .required('Campo obligatorio') // Ejemplo categorias [{id: 1}, {id: 2}, {id: 10}]
}

const schemaTemplateTickets = {
  tipo_cobro:
  yup.boolean(),
  metodos_pago:
    yup.array()
      .when('tipo_cobro', {
        is: true,
        then:
          yup.array().of(
            yup.object().shape({
              label:
                yup.string()
                  .required('Label requerido'),
              value:
                yup.number()
                  .required('Value requerido')
            })
          )
            .min(1, 'Selecciona al menos un método de pago')
            .required('Campo obligatorio')
      }),
  // Ejemplo metodo de pago [{label: "efectivo"", value: 1}]
  habra_boletos:
    yup.boolean(),
  boletos:
    yup.array()
      .when('habra_boletos', {
        is: true,
        then:
          yup.array().of(
            yup.object().shape({
              nombre:
                yup.string()
                  .min(3)
                  .required('Nombre requerido'),
              cantidad:
                yup.number()
                  .required('Cantidad requerido'),
              precio:
                yup.number()
                  .required('Precio requerido')
            })
          )
            .min(1, 'Agrega al menos un boleto')
            .required('Campo obligatorio')
      })
}
const schemaTemplateSummary = {
  acepto_terminos: yup.boolean()
    .oneOf([true], 'Debes aceptar los términos y condiciones')
    .required('Debes aceptar los términos')
}

export const mainSchemaCreateEvent = yup.object({
  ...schemaTemplateOrganizer,
  ...schemaTemplateEvent,
  ...schemaTemplateTickets,
  ...schemaTemplateSummary
})

export const SummaryTicket = yup.object(schemaTemplateSummary)
export const SchemaEvent = yup.object(schemaTemplateEvent)
export const SchemaTickets = yup.object(schemaTemplateTickets)
export const SchemaOrganizer = yup.object(schemaTemplateOrganizer)
