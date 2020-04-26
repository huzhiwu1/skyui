import Vue from "vue"
import Button from "./button"
import Icon from "./icon"
import ButtonGroup from "./button-group"
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
new Vue({
    el:'#app',
    data(){
        return{
            loading:false
        }
    }
})
// import chai from "chai"
// import spies from 'chai-spies'
//
// chai.use(spies);
// const expect = chai.expect
//
// //  单元测试
//
// try{
//     // icon属性
//     {
//         const Constructor = Vue.extend(Button)
//         const button = new Constructor({
//             propsData:{
//                 icon:'setting'
//             }
//         })
//         button.$mount()
//         console.log(button.$el)
//         let useElement = button.$el.querySelector('use')
//         let href = useElement.getAttribute('xlink:href')
//         expect(href).to.eq('#i-setting')
//         button.$el.remove()
//         button.$destroy()
//     }
// // loading属性
//     {
//         const Constructor = Vue.extend(Button)
//         const button = new Constructor({
//             propsData:{
//                 isLoading:true,
//                 icon:'setting'
//             }
//         })
//         button.$mount()
//         let useElement = button.$el.querySelector('use')
//         let href = useElement.getAttribute('xlink:href')
//         expect(href).to.eq('#i-loading')
//         button.$el.remove()
//         button.$destroy()
//     }
// //  icon的order
//     {
//         let div = document.createElement('div')
//         document.body.appendChild(div)
//         const Constructor = Vue.extend(Button)
//         const button = new Constructor({
//             propsData:{
//                 icon:'setting'
//             }
//         })
//         button.$mount(div)
//         let svg = button.$el.querySelector('svg')
//         let {order} = window.getComputedStyle(svg)
//         expect(order).to.eq('1')
//         button.$el.remove()
//         button.$destroy()
//     }
//     {
//         let div = document.createElement('div')
//         document.body.appendChild(div)
//         const Constructor = Vue.extend(Button)
//         const button = new Constructor({
//             propsData:{
//                 icon:'setting',
//                 iconPosition:'right'
//             }
//         })
//         button.$mount(div)
//         let svg = button.$el.querySelector('svg')
//         let {order} = window.getComputedStyle(svg)
//         expect(order).to.eq('2')
//         button.$el.remove()
//         button.$destroy()
//     }
// // 测试click事件
//     {
//         let div = document.createElement('div')
//         document.body.appendChild(div)
//         const Constructor = Vue.extend(Button)
//         const button = new Constructor({})
//         button.$mount(div)
//         let spy=chai.spy(function(){})
//         button.$on('click',spy)
//         let buttonDom = button.$el;
//         buttonDom.click()
//         expect(spy).to.have.been.called()
//         button.$el.remove()
//         button.$destroy()
//     }
//
// }catch(error){
//     window.errors=[error]
// }finally {
//     window.errors&&window.errors.forEach((error)=>{
//         console.error(error.message)
//     })
// }
