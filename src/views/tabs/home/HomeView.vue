<template>
    <div class="home-content">
        home
    </div>
</template>

<script setup lang="ts">
    import { getOrderList } from '@/api/order'
    import { onMounted } from 'vue'

    onMounted(async () => {
        let data = await getOrderList({})
        console.log(data)
    })

</script>

<style scoped lang="scss">
    .home-content {
        color: $bgColor;
        font-size: 28px;
    }
</style>
