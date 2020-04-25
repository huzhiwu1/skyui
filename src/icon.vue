<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href=`#i-${name}`></use>
    </svg>
</template>

<script>
    export default {
        name: "icon",
        props:['name']
    }
</script>

<style scoped lang="scss">
.icon{
    width:1em;
    height:1em;
    vertical-align: middle;
}
</style>
