<script>

import { store } from '../store.js'

export default {
    name: 'Appfilter',

    data() {
        return {
            store
        }
    },
    emits: ['changeSelected']

}

</script>

<template>
    <div class="filters">
        <select v-model="store.searchOption" @change="$emit('changeSelected')">
            <option value="" disabled selected>Choose One</option>
            <option v-for="archetype in store.archetypeList" :value="archetype.archetype_name">{{
                archetype.archetype_name }}</option>
        </select>
        <select v-model="store.maxPageElementNumber" @change="$emit('changeSelected')">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
        </select>

    </div>
    <!-- /.filters -->
</template>

<style></style>