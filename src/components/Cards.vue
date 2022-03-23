<template>
    <div>
        <h2>All Cards</h2>
        <b-table
            striped hover
            :items="items"
            class="mt-3"
            @row-clicked="showCardDetails"
            outlined>
        </b-table>
    </div>
</template>


<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios,axios)

export default {
    name: 'Cards',
    data() {
        return {
            items: this.mounted
        }
    },
    methods: {
        showCardDetails(record) {
            this.$router.push('/cards/' + record.card_number)
        }
    },
    mounted() {
        Vue.axios.get('https://mocki.io/v1/6dcbbb3d-3487-4955-a0e7-33170e76c772')
        .then((resp) => {
            this.items = resp.data
        })
    }
}
</script>