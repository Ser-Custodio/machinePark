import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import machinelist from './MachinesList.vue'
import machinemap from './MachinesMap.vue'
import machine from './Machine.vue'

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB0NjLqVTZRi6tXPZUV7d3lRXPcokfLqgA',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})
Vue.use(VueRouter)

// $.getJSON("https://machine-api-campus.herokuapp.com/api/machines" , function (data) { // callback
//                 data.forEach(function (machine) {
//                     $('.machines').append('<h4>' + machine.name + '</h4>');
//                 });
//     });
const routes = [
    { path: '/list' , component: machinelist },
    { path: '/map' , component: machinemap },
    { path: '/list', component: machine},
    ]

const router = new VueRouter({
    routes
})
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
