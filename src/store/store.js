import Vue from 'vue';
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        lists: []
    },
    getters: {
        lists: state => state.lists,
        list: state => (slug) => {
            if (!state.lists || state.lists.length === 0) return null
            return state.lists.find(item => item.slug === slug)
        }
    },
    mutations: {
        addList: (state, list) => {
            state.lists.push(list)
        },
        removeList: (state, slug) => {
            state.lists = state.lists.filter(list => list.slug !== slug);
        },
        addItem: (state, { item, slug }) => {
            let index = state.lists.findIndex(list => list.slug === slug)
            state.lists[index].items.push(item)
            state.lists[index].totalPrice = state.lists[index].items.reduce((accumulator, item) => accumulator + item.totalPrice, 0);
        },
        removeItem: (state, { item, slug }) => {
            if (state.lists && state.lists.length > 0) {
                let index = state.lists.findIndex(list => list.slug === slug)
                state.lists[index].items = state.lists[index].items.filter(i => i !== item);
            }
        }
    },
    actions: {
        addList: ({ commit }, list) => {
            commit('addList', list)
        },
        removeList: ({ commit }, slug) => {
            commit('removeList', slug)
        },
        removeItem: ({ commit }, { item, slug }) => {
            commit('removeItem', { item, slug })
        },
        addItem: ({ commit }, { item, slug }) => {
            commit('addItem', { item, slug })
        }
    },
    plugins: [
        createPersistedState({ storage: window.localStorage })
    ]
})