import Toast from "./toast"
export default{
    install(vue,options){
        vue.prototype.$toast=(message,toastOptions)=>{
            let Constructor = vue.extend(Toast)
            let vm = new Constructor({
                propsData:toastOptions
            })
            vm.$slots.default = [message]
            vm.$mount()
            document.body.appendChild(vm.$el)
        }
    }
}
