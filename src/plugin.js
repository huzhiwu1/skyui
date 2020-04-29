import Toast from "./toast"
let vm
export default{
    install(Vue,options){
        Vue.prototype.$toast=(message,propsData)=>{
            if(vm){
                console.log(vm,'plugin')
                vm.close()
            }
            createToast({Vue,message,propsData})
        }

    }
}
let createToast = function({Vue,propsData,message}){
        let Constructor = Vue.extend(Toast)
        vm = new Constructor({
            propsData,
        })
        vm.$slots.default = [message]
        vm.$on('close',()=>{
            vm=null
        })
        vm.$mount()

        document.body.appendChild(vm.$el)

}
