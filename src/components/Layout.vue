<template>
    <v-app dark>
        <v-toolbar color="secondary" dark fixed app>
            <img height="50%" src="public/backpack.png"/>
            <v-toolbar-title>Backpack Barber</v-toolbar-title>
        </v-toolbar>
        <v-content>
            <div >
                <router-view></router-view>
            </div>
        </v-content>
        <bottom-nav></bottom-nav>
    </v-app>
</template>

<script>
    import BottomNav from "./BottomNav";

    export default {
        components: {BottomNav},
        name: "layout",
        data: () => ({
            drawer: false
        })
    }
</script>

<style scoped>
</style>