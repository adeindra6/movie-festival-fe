<template>
    <!-- Page Title -->
    <div class="page-title">
        <h2>Movie Festival System</h2>
    </div>

    <!-- Title Row -->
    <div class="row">
        <div class="col-md-12">
            <p class="title">Our Movies List:</p>
        </div>
    </div>

    <!-- Filter and Search Row -->
    <div class="row">
        <div class="col-md-6 mt-5 filter-row">
            <input type="text" class="form-control search-input" placeholder="Search Movie" id="search" name="search" />
            <button class="btn btn-primary button-search">Search</button>
        </div>
        <div class="col-md-6 mt-5 filter-row">
        </div>
    </div>

    <!-- List Movie Row -->
    <div class="row">
        <div class="col-md-12 mt-3 list-row">
            <table>
                <thead>
                    <tr>
                        <th style="width: 30px;">No</th>
                        <th style="width: 200px;">Title</th>
                        <th style="width: 350px;">Description</th>
                        <th style="width: 100px;">Duration</th>
                        <th style="width: 200px;">Artists</th>
                        <th style="width: 100px;">Genres</th>
                        <th style="width: 350px;">Watch URL</th>
                        <th style="width: 100px;">Viewership</th>
                        <th style="width: 200px;">Action</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>

    <!-- Pagination Row -->
    <div class="row">
        <div class="col-md-6 mt-5">
        </div>
        <div class="col-md-6 mt-5">
            <label for="page-select" class="page-select-label">Page:</label>
            <select v-model="page" name="page-select" id="page-select" class="form-select page-select">
                <option v-for="n in total_page" v-bind:key="n">{{ n }}</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    name: "MovieFestivalHome",

    data() {
        return {
            page: 1,
            total_page: 5,
        }
    },
}
</script>

<style scoped>
.page-title {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: #0703FF;
}

.title {
    margin-top: 3rem;
    font-size: 20px;
    color: black;
    font-weight: 500;
}

.filter-row {
    display: inline;
}

.search-input {
    width: 50%;
    display: inline;
}

.button-search {
    margin-left: 1rem;
}

.list-row {
    display: flex;
    align-items: center;
    justify-content: center;
}

table tr th {
    border: 1px solid black;
}

table tr td {
    border: 1px solid black;
}

.page-select-label {
    font-size: 16px;
    font-weight: 500;
    margin-right: 0.1rem;
    display: inline;
}

.page-select {
    display: inline;
    width: 5rem;
}
</style>