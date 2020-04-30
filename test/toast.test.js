import Toast from "../src/toast"
import Vue from "vue"

Vue.config.productionTip=false
Vue.config.devtools=false

describe('toast组件',()=>{
    let Constructor = Vue.extend(Toast)
    let vm;

    afterEach(function(){
        vm&&vm.$el.remove()
        vm&&vm.$destroy()
    })
    it('存在',()=>{
        expect(Toast).to.exist
    })
    it('接收message',()=>{
        let div = document.createElement('div')
        document.body.appendChild(div)
        vm = new Constructor()
        vm.$slots.default=['信息']
        vm.$mount(div)
        let text = vm.$el.innerText
        expect(text.slice(0,2)==='信息').to.be.true
    })
    it('接收autoClose',(done)=>{
        let div = document.createElement('div')
        document.body.appendChild(div)
        vm = new Constructor({
            propsData:{
                autoClose:false,
                waitTime:100
            }
        }).$mount(div)
        setTimeout(()=>{
            expect(document.body.contains(vm.$el)).to.be.true
            done()
        },1000)
    })
    it('接收closeButton',()=>{
        let div = document.createElement('div')
        document.body.appendChild(div)
        let callback = sinon.fake()
        vm = new Constructor({
            propsData:{
                closeButton:{
                    text:'close',
                    callback:callback,
                },
                waitTime:100
            }
        }).$mount(div)
        let text = vm.$el.querySelector('.closeButton').textContent.trim()
        expect(text).to.equal('close')
        vm.$el.querySelector('.closeButton').click()
        expect(callback).to.have.been.called
    })
})
