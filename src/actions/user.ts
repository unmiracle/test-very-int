import axios from 'axios'
import store from '../store'
import { actionTypes } from '../store/reducers/user'

export async function ininialize(): Promise<void> {
  const res = await axios.get('/users/1')
  if (res.status !== 200) {
    throw new Error(`Can't fetch current user. Please try login again.`)
  }

  store.dispatch({ type: actionTypes.SET, payload: res.data })
}
