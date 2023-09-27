<script>

import { store } from '../store.js'

export default {
    name: 'Appfilter',

    data() {
        return {
            store
        }
    }

}

</script>

<template>
    <select class="mb-5" v-model="store.searchOption" @click="store.fetchData">
        <option value="" disabled>Choose One</option>
        <option v-for="archetype in store.archetypeList" :value="archetype.archetype_name">{{
            archetype.archetype_name }}</option>
    </select>
</template>

<style></style>