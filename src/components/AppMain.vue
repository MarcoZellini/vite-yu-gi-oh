<script>
import { store } from '../store.js'
import CardItem from './CardItem.vue'
import AppFilter from './AppFilter.vue'

export default {
    name: 'AppMain',
    components: {
        CardItem,
        AppFilter
    },
    data() {
        return {
            store
        }
    },
    created() {
        store.fetchData(store.baseUrl + `?num=${store.maxElementNumber}&offset=0`);
        store.fetchFilters();
    },
    methods: {
        filterData() {

            if (store.searchOption !== '') {
                store.fetchData(store.baseUrl + `?num=${store.maxElementNumber}&offset=0&archetype=${store.searchOption}`);
            } else {
                store.fetchData(store.baseUrl + `?num=${store.maxElementNumber}&offset=0`);
            }




        }
    },
}

</script>

<template>
    <main id="app_main">
        <div class="container">

            <AppFilter @change-selected="filterData" />

            <div v-if="store.cardCounter > 0"
                class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
                <div class="search_info">Found {{ store.cardCounter }} cards</div>
                <div class="col" v-for="card in store.data">
                    <CardItem :card="card" />
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