<template>
    <v-app dark>
        <!--<v-navigation-drawer-->
                <!--v-model="drawer"-->
                <!--fixed-->
                <!--app-->
        <!--&gt;-->
            <!--<v-list dense>-->
                <!--<v-list-tile @click="">-->
                    <!--<v-list-tile-action>-->
                        <!--<v-icon>home</v-icon>-->
                    <!--</v-list-tile-action>-->
                    <!--<v-list-tile-content>-->
                        <!--<v-list-tile-title>Home</v-list-tile-title>-->
                    <!--</v-list-tile-content>-->
                <!--</v-list-tile>-->
                <!--<v-list-tile @click="">-->
                    <!--<v-list-tile-action>-->
                        <!--<v-icon>contact_mail</v-icon>-->
                    <!--</v-list-tile-action>-->
                    <!--<v-list-tile-content>-->
                        <!--<v-list-tile-title>Contact</v-list-tile-title>-->
                    <!--</v-list-tile-content>-->
                <!--</v-list-tile>-->
            <!--</v-list>-->
        <!--</v-navigation-drawer>-->
        <v-toolbar color="secondary" dark fixed app>
            <img height="50%" src="/public/backpack.png">
            <!--<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>-->
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