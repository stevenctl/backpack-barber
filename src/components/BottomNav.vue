<template>
    <v-bottom-nav
            :active.sync="currentItem"
            :value="true"
            app
            shift
            color="secondary">
        <span v-for="(item, i) in Object.keys(items)">
        <v-btn
                :key="`bottom-nav-${item}`"
                @click="navigate(items[item].path)"
                flat
                class="primary--text"
                color="primary"
                :value="i">
            <span>{{item}}</span>
            <v-icon>{{items[item].icon}}</v-icon>
        </v-btn>
        </span>
    </v-bottom-nav>
</template>

<script>

    const items = {
        Feed: {
            path: "/browse",
            icon: "grid_on"
        },
        Messages: {
            path: "/messages",
            icon: "message"
        },
        Profile: {
            path: "/profile",
            icon: "face"
        }
    };


    export default {
        name: "bottom-nav",
        watch: {
          $route(newVal, oldVal){
              this.currentItem =  Object.keys(items).findIndex(
                  (k) => items[k].path === newVal.path
              )
          }
        },
        data() {
            return {
                currentItem: Object.keys(items).findIndex(
                    (k) => items[k].path === this.$route.path
                )
            }
        },
        methods: {
            navigate(path) {
                this.$router.push(path)
            }
        },
        computed: {
            items: () => items
        }
    }
</script>

<style scoped>

</style>