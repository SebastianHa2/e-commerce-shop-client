// Global state modules

import Vuex from 'vuex'

const moduleMan = {
    namespaced: true,
    state: {
        allItems: [],
        jackets: []
    },
    mutations: {

    },
    actions: {

    }
}

const moduleWoman = {
    namespaced: true,
    state: {
        allItems: []
    },
    mutations: {

    },
    actions: {

    }
}

const moduleUser = {
    namespaced: true,
    state: {
        loggedIn: false,
        cart: []
    }, 
    mutations: {

    },
    actions: {
        
    }
}

export const store = new Vuex.Store({
    modules: {
        man: moduleMan,
        woman: moduleWoman,
        user: moduleUser
    }
})