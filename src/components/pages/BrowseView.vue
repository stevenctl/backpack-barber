<template>
    <v-container v-bind="{ [`grid-list-xs`]: true }" fluid>
        <v-layout row wrap>
            <v-flex v-for="n in 24" :key="n" xs4 >
                <v-card
                    flat
                    tile
                    :style="`
                        background-image: url('https://unsplash.it/300/300?image=${Math.floor(Math.random() * 30) + 1}');
                        height: 33.3333vw;
                        background-size: cover;
                        position: relative;`">
                    <v-card-title primary-title style="position: absolute; bottom: 0">
                        <div>
                            <h4>John Doe</h4>
                            <div>13mi Away</div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "browse-view"
    }
</script>

<style scoped>

</style>