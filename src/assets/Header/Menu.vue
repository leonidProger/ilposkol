<template>
    <nav>
        <router-link :to="'/'" >Главная</router-link>
        <router-link :to="'/production'"  >Продукция</router-link>
        <router-link :to="'/about'">О нас</router-link>
        <router-link :to="'/flexible-stone'" >Гибкий камень</router-link>
        <router-link :to=" '/options'" >Свойства</router-link>
        <router-link :to=" '/freski'" >Фрескі</router-link>
        <router-link :to="'/video' " > Відео</router-link>
        <router-link :to=" '/contacts' ">Контакти</router-link>
    </nav>
</template>
<script>

    export default {
        name: "menu",
    }
</script>

<style scoped>
    nav{
        background-color: #F8B441;
        height: 30px;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        border: 1px solid #fff;
    }
    a{
        height: 30px;
        width: 100px;
        background-color: #F8B441;
        color:#212121;
        text-align: center;
        line-height: 30px;
        text-decoration: none;
    }
    a:hover{
        color:#F8B441;
        background: #212121;
        text-align: center;
    }
    a.router-link-exact-active{
        background: #212121;
        color:orange;
    }
</style>