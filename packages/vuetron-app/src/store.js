import Vue from 'vue';
import Vuex from 'vuex';
const io = require('socket.io-client');

const socket = io('http://localhost:3000');

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        clientState: {},  //state from client
        mutations: []     //history of mutations from client
    }
    // state: {
        // registrations: [],
        // users: [
        //     {id: 1, name: 'Max', registered: false},
        //     {id: 2, name: 'Anna', registered: false},
        //     {id: 3, name: 'Chris', registered: false},
        //     {id: 4, name: 'Sven', registered: false}
        // ]
    // },
    // mutations: {
        // SOCKET_CONNECT: (state, status) => {
        //     state.
        // }
    // }
});

socket.on('setInitState', function(data){
    console.log(data.state);
    store.state.clientState = data.state;
})

socket.on('stateUpdate', function(data){
    console.log('DATA: ', data, 'STATE: ', data.state, 'MUTATION: ', data.mutation);
    store.state.clientState = data.state;
    store.state.mutations.push(data.mutation);
})

