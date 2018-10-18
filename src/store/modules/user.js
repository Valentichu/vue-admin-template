import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    permissions: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions
    }
  },

  actions: {
    // 登录
    async Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      try {
        const response = await login(username, userInfo.password)
        const data = response.data
        setToken(data.token)
        commit('SET_TOKEN', data.token)
        return
      } catch (error) {
        console.log(error)
        throw error
      }
    },

    // 获取用户信息
    async GetInfo({ commit, state }) {
      const response = await getInfo(state.token)
      const data = response.data
      if (data.permissions && data.permissions.length > 0) {
        // 验证返回的permissions是否是一个非空数组
        commit('SET_PERMISSIONS', data.permissions)
      } else {
        throw new Error('getInfo: permissions must be a non-null array !')
      }
      commit('SET_NAME', data.name)
      commit('SET_AVATAR', data.avatar)
      return response
    },

    // 登出
    async LogOut({ commit, state }) {
      await logout(state.token)
      commit('SET_TOKEN', '')
      commit('SET_PERMISSIONS', [])
      removeToken()
    },

    // 前端 登出
    async FedLogOut({ commit }) {
      commit('SET_TOKEN', '')
      removeToken()
    }
  }
}

export default user
