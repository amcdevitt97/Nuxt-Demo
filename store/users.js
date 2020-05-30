export const state = () => ({
  name: `Example User`,
  email: 'Example@email.com',
  imageUrl: '',
  loggedIn: true,
  newUser: false,
  loggedInAt: new Date()
})

// ----------- Mutations

export const mutations = {
  clearUser: (state) => (state.user = null),
  setUser: (state, payload) => {
    // Payload should be POJO containing user's info
    const { user } = payload

    // Set the key in state to match the value from payload
    state.user = { ...user }
  }
}

// --------- Actions
export const actions = {
  authenticateUser({ commit }, payload) {
    const { action, user } = payload
    if (action === 'register') {
      // Do stuff

      // Mutate the vuex store using commit('mutation', params)
      commit('setUser', user)
    } else if (action === 'logout') commit('clearUser')
  }
}

// --------- Getters
export const getters = {
  user: (state) => state.user
}
