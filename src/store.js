import { reactive } from 'vue'
import axios from '../node_modules/axios';

export const store = reactive({
    // queryString: `?&num=50&offset=0`,
    data: null,
    archetypeListUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    archetypeList: null,
    searchOption: '',
    cardCounter: null,
    maxElementNumber: '10',
    baseUrl: `https://db.ygoprodeck.com/api/v7/cardinfo.php`,

    fetchData(url) {

        axios
            .get(url)
            .then(response => {
                this.data = response.data.data
                this.cardCounter = this.data.length;
            })
            .catch(error => {
                console.error(error);
            });




    },
    fetchFilters() {
        axios
            .get(this.archetypeListUrl)
            .then(response => {
                this.archetypeList = response.data;
            })
            .catch(error => {
                console.error(error);
            });
    }

})