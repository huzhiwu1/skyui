// const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    const Constructor = Vue.extend(Input)
    let vm

    it('存在', () => {
        expect(Input).to.be.ok
    })
    describe('props', () => {
        afterEach(() => {
            vm.$destroy()
        })
        it('接收value', () => {
            vm = new Constructor({
                propsData: {
                    value: "信息"
                }
            }).$mount()
            let inputElement = vm.$el.querySelector('input')
            let value = inputElement.value
            expect(value).to.equal('信息')

        })
        it('接收disabled', () => {

            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            let inputElement = vm.$el.querySelector('input')
            let disabled = inputElement.disabled

            expect(disabled).to.equal(true)
        })
        it("接收error", () => {
            vm = new Constructor({
                propsData: {
                    error: "错误信息"
                }
            }).$mount()
            const element = vm.$el.querySelector('.message')
            let value = element.innerText
            expect(value).to.equal('错误信息')
            let svg = vm.$el.querySelector('use')
            let href = svg.getAttribute('xlink:href')
            expect(href).to.equal('#i-error')
        })
        it('接收readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            let inputElement = vm.$el.querySelector('input')
            let readonly = inputElement.readOnly
            expect(readonly).to.be.true
        })
    })
    describe('事件', () => {
        afterEach(() => {
            vm.$destroy()
        })
        it('支持input/change/blur/focus', () => {
            ['change', 'focus', 'blur', 'input'].forEach(eventName => {
                vm = new Constructor().$mount()
                let callback = sinon.fake()
                vm.$on(eventName, callback)
                let inputElement = vm.$el.querySelector('input')
                let event = new Event(eventName)
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith(event)
            })
        })

        // it('触发事件chang',()=>{
        //
        // })
        // it('可以触发input事件',()=>{
        //     vm = new Constructor().$mount()
        //     let callback = sinon.fake()
        //     vm.$on('input',callback)
        //     let event = new Event('input')
        //     let input =vm.$el.querySelector('input')
        //     input.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // })
        // it('可以触发blur事件',()=>{
        //     vm = new Constructor().$mount()
        //     let callback = sinon.fake()
        //     vm.$on('blur',callback)
        //     let event = new Event('blur')
        //     let input =vm.$el.querySelector('input')
        //     input.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // })
        // it('可以触发focus事件',()=>{
        //     vm = new Constructor().$mount()
        //     let callback = sinon.fake()
        //     vm.$on('focus',callback)
        //     let event = new Event('focus')
        //     let input =vm.$el.querySelector('input')
        //     input.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // })
    })
})
