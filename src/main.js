import Vue from 'vue'
import App from './App.vue'

$.getJSON("https://machine-api-campus.herokuapp.com/api/machines" , function (data) {
                data.forEach(function (machine) {
                $('.machines').append('<h4>' + machine.name + '</h4>');
                });
    });

Vue.component('list',{
    template: '<h1>List de machines</h1>'
});
Vue.component('carte',{
    template: '<h1>Carte des machines</h1>'
});
new Vue({
    el: '#app',
    render: h => h(App)
});
