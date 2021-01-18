import axios from "axios"
import {Cookies} from "quasar"
import urlencoded from "form-urlencoded"

export async function checkOtenAction() {
  let header = Cookies.get("_msk")

  return axios.get(`${process.env.APP_ADDRESS}/v1/pengguna/check`, {
    headers: {
      authorization: `Bearer ${header}`
    }
  })
}

export async function otentikasiAction(ctx, payload) {
  const data = {
    email: payload.email,
    password: payload.password
  }

  return await axios.post(
    `${process.env.APP_ADDRESS}/v1/pengguna/login`,
    urlencoded(data)
  )
}
