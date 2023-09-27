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
        store.fetchData(store.baseUrl + `?num=${store.maxElementNumber}&offset=0`);
        store.fetchFilters();
    },
    methods: {
        filterData() {

            if (store.searchOption !== '') {
                store.fetchData(store.baseUrl + `?archetype=${store.searchOption}&num=${store.maxElementNumber}&offset=0`);
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

            <div class="page_controls">
                <div class="prev"></div>
                <!-- /.prev -->
                <div class="next"></div>
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