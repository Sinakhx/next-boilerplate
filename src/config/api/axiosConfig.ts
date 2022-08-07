import axios from 'axios'

import * as logs from '@/config/constants/messageLogs'

const baseURL = process.env.API_BASE_URL

const basicAuth = {
  username: process.env.API_USERNAME!,
  password: process.env.API_PASSWORD!
}

const commonHeaders = {
  'Content-Type': 'application/json' // or  'multipart/form-data' , ...
}

const axiosWithAuth = axios.create({
  baseURL,
  headers: {
    ...commonHeaders
    // Authorization: `Bearer ${Cookies.get('token')}`
  },
  auth: basicAuth
})

const axiosWithoutAuth = axios.create({
  baseURL,
  headers: {
    ...commonHeaders
  }
})

const axiosSuccessHandler = (response: unknown) => response

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const axiosErrorHandler = (error: any) => {
  const response = error?.response || {}
  if (typeof response.data === 'string') {
    console.error(response.data)
  } else if (response.status === 400) {
    if (response.data) {
      const { errors } = response.data
      const firstErrro = Object.keys(errors)[0]
      console.error(errors[firstErrro][0])
    } else {
      console.error(logs.MSG_400_BAD_REQUEST)
    }
  } else if (response.status === 401) {
    console.error(logs.MSG_401_UNAUTHORIZED)
  } else if (response.status === 403) {
    console.error(logs.MSG_403_FORBIDDEN)
  } else if (response.status === 404) {
    console.error(logs.MSG_404_NOT_FOUND)
  } else if (response.status === 500) {
    console.error(logs.MSG_500_SERVER_ERROR)
  } else {
    console.error(logs.MSG_XXX_ERROR_RETRY)
  }
  return Promise.reject(error)
}

axiosWithAuth.interceptors.response.use(axiosSuccessHandler, axiosErrorHandler)
axiosWithoutAuth.interceptors.response.use(
  axiosSuccessHandler,
  axiosErrorHandler
)

export { axiosWithAuth, axiosWithoutAuth }
