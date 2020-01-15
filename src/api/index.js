
const BACK = 'http://localhost:8080'

export const GET_FOLLOWING = (user) => `${BACK}/${user}/following`
export const GET_FOLLOWERS = (user) => `${BACK}/${user}/followers`
