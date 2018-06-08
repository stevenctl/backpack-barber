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
                    <div>
                        <v-icon color="primary" v-for="r in Math.floor(Math.random() * 4) + 1" :key="r">
                            star
                        </v-icon>
                        <v-icon color="primary" v-if="Math.random() > 0.5">
                            star_half
                        </v-icon>
                    </div>

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