<script>
import { store } from '../store.js'
import CardItem from './CardItem.vue'

export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },
    created() {
        store.fetchData()
    },
    components: {
        CardItem
    }
}

</script>

<!-- v-model="store.searchOption" -->

<template>
    <main id="app_main">
        <div class="container">
            <select class="mb-5" v-model="store.searchOption" @click="store.fetchData">
                <option value="" disabled>Choose One</option>
                <option value="Alien">Alien</option>
                <option value="Noble Knight">Noble Knight</option>
            </select>
            <div v-if="store.cardCounter > 0"
                class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
                <div class="search_info">Found {{ store.cardCounter }} cards</div>
                <div class="col" v-for="card in store.data">
                    <CardItem :image="card.card_images[0].image_url" :name="card.name" :archetype="card.archetype" />
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
            <div v-else class="page_loader"></div>
        </div>
        <!-- /.container -->
    </main>
    <!-- /#app_main -->
</template>

<style></style>