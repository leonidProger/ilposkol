<template>
    <div id="container-header">
        <Menu></Menu>
    </div>
</template>

<script>
    import Menu from "./Menu";
    export default {
        name: "Header",
        components: {
            Menu
        }
    }
</script>

<style scoped>
#container-header{
    width: 100%;
    height: auto;
}
</style>