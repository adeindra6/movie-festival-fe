<template>
    <!-- Back Button -->
    <div class="back">
        <router-link class="btn btn-light" to="/">Back to home</router-link>
    </div>

    <!-- Page Title -->
    <div class="page-title">
        <h2>Movie Analytics</h2>
    </div>

    <!-- Movie Analytics -->
    <div class="row">
        <div class="col-md-12 mt-5">
            <p class="analytics-text">Most Viewed Movie: {{ mostViewedMovie }}</p>
            <p class="analytics-text">Most Viewed Genre: {{ mostViewedGenre }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "AnalyticsMoviePage",

    data() {
        return {
            mostViewedMovie: "Perayaan mati rasa",
            mostViewedGenre: "Drama",
        }
    },
}
</script>

<style scoped>
.back {
    display: flex;
    align-items: flex-start;
    margin-left: 5rem;
}

.page-title {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: #0703FF;
}

.analytics-text {
    font-family: 'Times New Roman', Times, serif;
    font-size: 18px;
    font-weight: 600;
    color: black;
}
</style>