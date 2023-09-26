<script>
import { store } from '../store.js'

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
                    <div class="card">
                        <div class="card-img-top">
                            <img class="img-fluid" :src="card.card_images[0].image_url" alt="YGO CARD">
                        </div>
                        <div class="card-body">
                            <h3 class="card_name">{{ card.name }}</h3>
                            <h4 class="card_type">{{ card.archetype }}</h4>
                        </div>
                    </div>
                    <!-- /.card -->
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