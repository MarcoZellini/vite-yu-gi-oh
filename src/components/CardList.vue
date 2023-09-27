<script>
import { store } from '../store.js'
import CardItem from './CardItem.vue'

export default {
    name: 'CardList',
    components: {
        CardItem
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div v-if="store.cardCounter > 0"
        class="row justify-content-center row-cols-1row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 g-3">
        <div class="search_info">Found {{ store.cardCounter }} cards</div>
        <div class="col" v-for="card in store.data">
            <CardItem :card="card" />
        </div>
        <!-- /.col -->
    </div>
    <!-- /.row -->
    <div v-else class="page_loader"></div>
</template>

<style></style>