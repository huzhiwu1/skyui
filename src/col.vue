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
                const {span,offset,phone,ipad,narrowPc,pc,widePc}  = this
                return[span&&`col-${span}`,offset&&`offset-${offset}`,
                    phone&&phone.span&&`col-phone-${phone.span}`,
                    phone&&phone.offset&&`offset-phone-${phone.offset}`,
                    ipad&&ipad.span&&`col-ipad-${ipad.span}`,
                    ipad&&ipad.offset&&`offset-ipad-${ipad.offset}`,
                    narrowPc&&narrowPc.span&&`col-narrow-pc-${narrowPc.span}`,
                    narrowPc&&narrowPc.offset&&`offset-narrow-pc-${narrowPc.offset}`,
                    pc&&pc.span&&`col-pc-${pc.span}`,
                    pc&&pc.offset&&`offset-pc-${pc.offset}`,
                    widePc&&widePc.span&&`col-wide-pc-${widePc.span}`,
                    widePc&&widePc.offset&&`offset-wide-pc-${widePc.offset}`,
                ]
            }
        }
    }
</script>
<style lang="scss" scoped>
    .col {
        $class-prefix: 'col-';
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
            &.#{$class-prefix}#{$i} {
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
        @media(max-width:576px){
            @for $i from 1 through 24{
                &.#{$class-prefix}phone-#{$i}{
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
        }
        @media(min-width:577px)and(max-width:768px){
            @for $i from 1 through 24{
                &.#{$class-prefix}ipad-#{$i}{
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
        @media(min-width:769px)and(max-width:992px){
            @for $i from 1 through 24{
                &.#{$class-prefix}narrow-pc-#{$i}{
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
        @media(min-width:993px)and(max-width:1200px){
            @for $i from 1 through 24{
                &.#{$class-prefix}pc-#{$i}{
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
        @media(min-width:1201px){
            @for $i from 1 through 24{
                &.#{$class-prefix}wide-pc-#{$i}{
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
