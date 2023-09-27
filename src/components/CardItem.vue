<script>
export default {
    name: 'CardItem',
    props: {
        card: Object,
    }
}
</script>

<template>
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
</template>

<style></style>