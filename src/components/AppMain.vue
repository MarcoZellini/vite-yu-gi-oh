<script>
import { store } from '../store.js'
import CardList from './CardList.vue'
import AppFilter from './AppFilter.vue'

export default {
    name: 'AppMain',
    components: {
        CardList,
        AppFilter
    },
    data() {
        return {
            store
        }
    },
    created() {
        store.fetchData(store.baseUrl + `?num=${store.maxPageElementNumber}&offset=0`);
        store.fetchFilters();
        store.fetchDataFiltered();
    },
    methods: {
        filterData() {
            store.pageNumber = 0;
            store.fetchDataFiltered();

            if (store.searchOption !== '') {
                store.fetchData(store.baseUrl + `?archetype=${store.searchOption}&num=${store.maxPageElementNumber}&offset=${store.maxPageElementNumber * store.pageNumber}`);
            } else {
                store.fetchData(store.baseUrl + `?num=${store.maxPageElementNumber}&offset=${store.maxPageElementNumber * store.pageNumber}`);
            }


        },

        nextPage() {
            if (store.pageNumber < store.maxPages - 1) {
                store.pageNumber++;
                if (store.searchOption !== '') {
                    store.fetchData(store.baseUrl + `?archetype=${store.searchOption}&num=${store.maxPageElementNumber}&offset=${store.maxPageElementNumber * store.pageNumber}`);
                } else {
                    store.fetchData(store.baseUrl + `?num=${store.maxPageElementNumber}&offset=${store.maxPageElementNumber * store.pageNumber}`);
                }
            }
        },

        prevPage() {

            if (store.pageNumber > 0) {
                store.pageNumber--;
                if (store.searchOption !== '') {
                    store.fetchData(store.baseUrl + `?archetype=${store.searchOption}&num=${store.maxPageElementNumber}&offset=${store.maxPageElementNumber * store.pageNumber}`);
                } else {
                    store.fetchData(store.baseUrl + `?num=${store.maxPageElementNumber}&offset=${store.maxPageElementNumber * store.pageNumber}`);
                }
            }


        }
    },
}

</script>

<template>
    <main id="app_main">
        <div class="container">

            <AppFilter @change-selected="filterData" />

            <div class="page_controls">
                <div class="prev" @click="prevPage">
                    <i class="fa-solid fa-chevron-left"></i>
                </div>
                <!-- /.prev -->
                <h5 class="page_counter text-uppercase">Page {{ store.pageNumber + 1 }}</h5>
                <div class="next" @click="nextPage">
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
                <!-- /.next -->
            </div>
            <!-- /.page_controls -->


            <CardList />
        </div>
        <!-- /.container -->
    </main>
    <!-- /#app_main -->
</template>

<style></style>