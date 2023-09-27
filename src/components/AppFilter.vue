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
    <select class="mb-5" v-model="store.searchOption" @click="$emit('changeSelected')">
        <option value="" disabled selected>Choose One</option>
        <option v-for="archetype in store.archetypeList" :value="archetype.archetype_name">{{
            archetype.archetype_name }}</option>
    </select>
</template>

<style></style>