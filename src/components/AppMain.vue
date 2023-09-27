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
        store.fetchFilters();
        store.fetchDataFiltered();
        store.fetchData();
    },
    methods: {
        filterData() {
            store.pageNumber = 0;
            store.fetchDataFiltered();
            store.fetchData();
        },

        nextPage() {
            if (store.pageNumber < store.maxPages - 1) {
                store.pageNumber++;
                store.fetchData();
            }
        },

        prevPage() {

            if (store.pageNumber > 0) {
                store.pageNumber--;
                store.fetchData()
            }

        }
    },
}

</script>

<template>
    <main id="app_main">
        <div class="container">

            <div class="page_settings">
                <AppFilter @change-selected="filterData" />

                <div class="page_controls">
                    <div class="prev" @click="prevPage">
                        <i class="fa-solid fa-chevron-left"></i>
                    </div>
                    <!-- /.prev -->
                    <h6 class="page_counter text-uppercase">Page {{ store.pageNumber + 1 }}</h6>
                    <div class="next" @click="nextPage">
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                    <!-- /.next -->
                </div>
                <!-- /.page_controls -->

            </div>
            <!-- /.page_settings -->





            <CardList />
        </div>
        <!-- /.container -->
    </main>
    <!-- /#app_main -->
</template>

<style></style>