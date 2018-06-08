<template>
    <v-date-picker
            full-width
            reactive
            v-model="pickedDate"
    ></v-date-picker>
</template>

<script>
    export default {
        name: "profile-view",
        data(){
            return {
                pickedDate: null
            }
        }
    }
</script>

<style scoped>

</style>