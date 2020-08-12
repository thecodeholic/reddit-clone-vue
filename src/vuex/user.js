/**
 * Created by TheCodeholic on 8/1/2020.
 */
import httpClient from "@/plugins/axios";
export const SET_USER = 'SET_USER';

const posts = {
  namespaced: true,
  state: {
    token: null,
    user: {
      id: null,
      username: null,
      email: null
    }
  },
  actions: {
    async login({commit}, loginData) {
      try {
        const response = await httpClient.post('/login', loginData);
        if (response.status === 200) {
          commit(SET_USER, {
            token: response.data.jwt,
            user: response.data
          })
        }
        return response;
      } catch(e) {
        return e.response
      }
    }
  },
  mutations: {
    [SET_USER]: (state, {token, user}) => {
      state.token = token;
      state.user = user;
    }
  }
}

export default posts;