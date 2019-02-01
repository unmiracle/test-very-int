export const actionTypes = {
  SET: 'USER_SET',
  CLEAR: 'USER_CLEAR',
}

const initState = {
  // user structure
}

export default function user(state = initState, action) {
  switch (action.type) {
    case actionTypes.SET:
      return { ...action.payload }
    case actionTypes.CLEAR:
      return { ...initState }
    default:
      return state
  }
}
