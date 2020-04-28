import Vue from "vue"
import Row from "../src/row"
import Col from "../src/col"
Vue.config.productionTip=false;
Vue.config.devtools=false;

describe(' Col组件',()=>{
    Vue.component('g-row', Row)
    Vue.component('g-col', Col)
    let div = document.createElement('div')
    document.body.appendChild(div)
    let vm=null;
    afterEach(function(){
        vm&&vm.$destroy()
    })
    after(function(){
        div.remove()
    })
    it('存在',()=>{
        expect(Col).to.exist
    })
    it('接收span',(done)=>{


        div.innerHTML = `
        <g-row >
        <g-col :span="12">1</g-col>
        </g-row>
    `
       vm = new Vue({
            el: div
        }).$mount()
        setTimeout(()=>{
            let col = vm.$el.querySelector('.col')
            console.log(col.classList);
            expect(col.classList.contains('col-12')).to.be.true
            done()
        },0)
    })
    it('接收offset',(done)=>{

        div.innerHTML = `
        <g-row >
        <g-col :span="12" offset="12">1</g-col>
        </g-row>
    `
         vm = new Vue({
            el: div
        }).$mount()
        setTimeout(()=>{
         let col = vm.$el.querySelector('.col')
         expect(col.classList.contains('offset-12')).to.be.true
            done()
        })
    })
   /* it('接收phone,ipad,narrow-pc,pc,wide-pc',(done)=>{
        ['phone','ipad','narrow-pc','wide-pc'].forEach(async (item)=>{
            let word = item
            word=='narrow-pc'&&(word='narrowPc')
            word=='wide-pc'&&(word='widePc')
            div.innerHTML = `
        <g-row >
        <g-col :word="{span:12,offset:12}">1</g-col>
        </g-row>
    `
            vm = new Vue({
                el: div
            }).$mount()
            await setTimeout(()=>{
                let col = vm.$el.querySelector('.col')

                expect(col.classList.contains(`col-${word}-12`)).to.be.true
                expect(col.classList.contains(`offset-${word}-12`)).to.be.true
                console.log('执行')

            })
        })
        done()

    })
*/
    let fn = (name,done)=>{

        div.innerHTML = `
        <g-row >
        <g-col :${name}="{span:12,offset:12}">1</g-col>
        </g-row>
    `

        vm = new Vue({
            el: div
        }).$mount()
        setTimeout(() => {
            let col = vm.$el.querySelector('.col')
            console.log(col)
            expect(col.classList.contains(`col-${name}-12`)).to.be.true
            expect(col.classList.contains(`offset-${name}-12`)).to.be.true
            done()
        })
    }
    it('接收phone',(done)=> {
         fn('phone',done)
    })
    it('接收ipad',(done)=>{
        fn('ipad',done)
    })
    it('接收narrowPc',(done)=>{
        fn('narrow-pc',done)
    })
    it('接收pc',(done)=>{
        fn('pc',done)
    })
    it('接收widePc' ,(done)=>{
        fn('wide-pc',done)
    })
})
