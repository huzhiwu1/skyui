import Tabs from "../src/tabs"
import Vue from "vue"
Vue.config.devtools=false
Vue.config.productionTip=false
describe('tabs组件',()=>{
    it('存在',()=>{
        expect(Tabs).to.exist
    })
})
