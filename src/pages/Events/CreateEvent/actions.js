export const updateCreateEvent = (state, { payload }) => {
  return {
    ...state,
    createEvent: {
      ...state.createEvent,
      ...payload
    }
  }
}
export const clearAction = (state, { payload }) => {
  console.log(payload, 'PAYLOAD')
  return {
    ...state,
    createEvent: {
      ...payload
    }
  }
}
