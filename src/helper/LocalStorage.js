export const removeCredentials = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
}

export const setCredentials = (token, user) => {
  localStorage.setItem('token', JSON.stringify(token))
  localStorage.setItem('user', JSON.stringify(user))
}

export const getCredentials = () => {
  return {
    token: JSON.parse(localStorage.getItem('token')),
    user: JSON.parse(localStorage.getItem('user'))
  }
}
