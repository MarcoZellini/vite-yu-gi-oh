<script>
export default {
    name: 'CardItem',
    props: {
        image: String,
        name: String,
        archetype: String
    }
}
</script>

<template>
    <div class="card">
        <div class="card-img-top">
            <img class="img-fluid" :src="image" alt="YGO CARD">
        </div>
        <div class="card-body">
            <h3 class="card_name">{{ name }}</h3>
            <h4 class="card_type">{{ archetype }}</h4>
        </div>
    </div>
    <!-- /.card -->
</template>

<style></style>