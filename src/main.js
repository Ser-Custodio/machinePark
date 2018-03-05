import Vue from 'vue'
import App from './App.vue'

$.getJSON("https://machine-api-campus.herokuapp.com/api/machines" , function (data) {
                data.forEach(function (machine) {
                $('.machines').append('<h4>' + machine.name + '</h4>');
                });
    });

new Vue({
    el: '#app',
    render: h => h(App)
});
