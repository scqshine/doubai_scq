<template>
    <div >
        <span>{{ txt }}</span>
        <slot name='left'></slot>
        <slot name='right'></slot>
        <slot name='search'></slot>
    </div>


</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>

</style>