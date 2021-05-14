<template>
    <header-container>
        <template v-slot:location>Jackets</template>
    </header-container>
    <div class="jacket-items">

    </div>
    <footer-container></footer-container>
</template>

<script>
import HeaderContainer from '../../../UI/Header/HeaderContainer.vue'
import FooterContainer from '../../../UI/FooterContainer.vue'
export default {
    components: { HeaderContainer, FooterContainer }
}
</script>

<style lang="scss" scoped>
    .jacket-items{
        width: 100%;
        height: 100vh;
        background-color: #c0c2ce;
    }

    .footer{
        background-color: #c0c2ce;
        margin-top: 0;
    }
</style>