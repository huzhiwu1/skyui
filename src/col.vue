<template>
    <div :class="colClass" :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}"
         class="col"
    >
            <slot></slot>
    </div>
</template>
<script>
    let validator = value=>{
        let valid=true;
        let keys = Object.keys(value)
        let arr = ['span','offset']
        keys.forEach(item=>{
            if(!arr.includes(item)){
                valid=false
            }
        })
        return valid;
    }
    export default {
        name: "g-col",
        props: {
            span: {
                type: [String, Number]
            },
            offset: {
                type: [String, Number]
            },
            phone:{
                type:Object,
                validator
            },
            ipad:{
                type:Object,
                validator
            },
            narrowPc:{
                type:Object,
                validator
            },
            pc:{
                type:Object,
                validator
            },
            widePc:{
                type:Object,
                validator
            }

        },
        data() {
            return {
                gutter: 0
            }
        },
        computed:{
            colClass(){
                let x = (obj,str)=>{
                    return[
                        obj&&obj.span&&`col-${str}${obj.span}`,
                        obj&&obj.offset&&`offset-${str}${obj.offset}`
                    ]
                }
                const {span,offset,phone,ipad,narrowPc,pc,widePc}  = this
                return[
                    ...x({span,offset}),
                    ...x(phone,'phone-'),
                    ...x(ipad,'ipad-'),
                    ...x(narrowPc,'narrow-pc-'),
                    ...x(pc,'pc-'),
                    ...x(widePc,'wide-pc')
                ]
            }
        }
    }
</script>
<style lang="scss" scoped>
    .col {
        $col-prefix: 'col-';
        $oneWidth: 100%/24;
        $offset-prefix: 'offset-';
        $gutter-prefix: "gutter-";

        &:first-child {
            padding-left: 0!important;
        }

        &:last-child {
            padding-right: 0!important;
        }

        @for $i from 1 through 24 {
            &.#{$col-prefix}#{$i} {
                width: $i*$oneWidth;
                max-width: $i*$oneWidth;
                min-width: $i*$oneWidth;
            }
        }
        @for $i from 1 through 24 {
            &.#{$offset-prefix}#{$i} {
                margin-left: $oneWidth*$i
            }
        }
        //phone和span是一样的样式
        @for $i from 1 through 24{
            &.#{$col-prefix}phone-#{$i}{
                width: $i*$oneWidth;
                max-width: $i*$oneWidth;
                min-width: $i*$oneWidth;
            }
        }
        @for $i from 1 through 24{
            &.#{$offset-prefix}phone-#{$i}{
                margin-left: $oneWidth*$i
            }
        }
        @media (min-width:576px) {
            @for $i from 1 through 24{
                &.#{$col-prefix}ipad-#{$i}{
                    width: $i*$oneWidth;
                    max-width: $i*$oneWidth;
                    min-width: $i*$oneWidth;
                }
            }
            @for $i from 1 through 24{
                &.#{$offset-prefix}ipad-#{$i}{
                    margin-left: $oneWidth*$i
                }
            }
        }
        @media(min-width:768px){
            @for $i from 1 through 24{
                &.#{$col-prefix}narrow-pc-#{$i}{
                    width: $i*$oneWidth;
                    max-width: $i*$oneWidth;
                    min-width: $i*$oneWidth;
                }
            }
            @for $i from 1 through 24{
                &.#{$offset-prefix}narrow-pc-#{$i}{
                    margin-left: $oneWidth*$i
                }
            }
        }
        @media(min-width:992px){
            @for $i from 1 through 24{
                &.#{$col-prefix}pc-#{$i}{
                    width: $i*$oneWidth;
                    max-width: $i*$oneWidth;
                    min-width: $i*$oneWidth;
                }
            }
            @for $i from 1 through 24{
                &.#{$offset-prefix}pc-#{$i}{
                    margin-left: $oneWidth*$i
                }
            }
        }
        @media(min-width:1200px){
            @for $i from 1 through 24{
                &.#{$col-prefix}wide-pc-#{$i}{
                    width: $i*$oneWidth;
                    max-width: $i*$oneWidth;
                    min-width: $i*$oneWidth;
                }
            }
            @for $i from 1 through 24{
                &.#{$offset-prefix}wide-pc-#{$i}{
                    margin-left: $oneWidth*$i
                }
            }
        }
    }
</style>
