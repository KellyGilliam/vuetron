import Vue from 'vue';
import Vuex from 'vuex';
const io = require('socket.io-client');

// const socket = io('http://localhost:9090');

Vue.use(Vuex);


const VuetronVuex = function (port = 9090) {
    return store => {
      // initialize socket connection
      const socket = io('http://localhost:' + port);
      console.log('connected to sockets');  
      // emit initial state to server
    //   socket.emit('clientStateInit', store.state);
  
    //   // subscribe to store mutations
    //   store.subscribe((mutation, state) => {
    //     // on mutation, emit update event to server
    //     socket.emit('clientStateUpdate', state);
    //   })

      socket.on('testEmit', function(data){
        console.log('DATA', data.test);
        store.state.tests.push(data.test);
        })

    }
  }


export const store = new Vuex.Store({
    state: {
        clientState: {},  //state from client
        mutations: [],    //history of mutations from client
        messages: ['Store works!', 'Chicken wings are delicious'],
        tests: ['hardCodeTest', 'test2'],
        events: []
    },
    plugins: [VuetronVuex()]
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

// socket.on('setInitState', function(data){
//     console.log(data.state);
//     store.state.clientState = data.state;
// })

// socket.on('stateUpdate', function(data){
//     console.log('DATA: ', data, 'STATE: ', data.state, 'MUTATION: ', data.mutation);
//     store.state.clientState = data.state;
//     store.state.mutations.push(data.mutation);
// })



