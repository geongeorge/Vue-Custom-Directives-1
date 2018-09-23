import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive("highlight", {
  bind(el, binding, vnode) {
    let ourcolor =  binding.value
    
    if(binding.modifiers['blink']){
      let whitecolor = "white"
      let color = ourcolor
      setInterval(()=> {
        color = color==ourcolor? whitecolor: ourcolor
        el.style.background = color
      },500)
    } else {
      el.style.background = ourcolor
    }
  }
})
new Vue({
  render: h => h(App)
}).$mount('#app')
