import './wave.scss'
const ownAddEventListener = (scope,type,handler,capture)=>{
    scope.addEventListener(type,handler,capture);
    return ()=>{
        scope.removeEventListener(type,handler,capture)
    }
}
const handleClick=(e,el,binding)=>{

    let waveDom = el.querySelector('.waveWrap')
    if(!waveDom){
        let {position,overflow} = window.getComputedStyle(el)
        if(overflow!='hidden') el.style.overflow='hidden'
        if(position==='static')el.style.position='relative'
        waveDom=document.createElement('div')
        waveDom.classList.add('waveWrap','animate')
        waveDom.style.top=e.offsetY-50+'px'
        waveDom.style.left=e.offsetX-50+'px'
        binding.value&&(waveDom.style.backgroundColor=binding.value)



        el.appendChild(waveDom)
    }else{
        waveDom.classList.remove('animate')
        waveDom.style.top=e.offsetY-50+'px'
        waveDom.style.left=e.offsetX-50+'px'
        binding.value&&(waveDom.style.backgroundColor=binding.value)
        waveDom.classList.add('animate')

    }
}
let disposer = null;
export default {
    bind(el,binding){
        disposer = ownAddEventListener(el,'click',e=>handleClick(e,el,binding),false)
    },
    componentUpdated(el,binding){
        disposer()
        disposer = ownAddEventListener(el,'click',e=>handleClick(e,el,binding),false)
    },
    unbind(el,binding){
        disposer()
    }
}
