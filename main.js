
import Vue from 'vue'
import App from './App.vue'

window.addEventListener('load', () => {
  FastClick.attach(document.body)
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Object.defineProperty(Vue.prototype, '$cookie', { value: Cookies })

Object.defineProperty(Vue.prototype, '$axios', { value: axios })

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})