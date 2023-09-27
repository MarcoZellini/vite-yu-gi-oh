import { reactive } from 'vue'
import axios from '../node_modules/axios';

export const store = reactive({
    baseUrl: '',
    data: null,
    archetypeListUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    archetypeList: null,
    searchOption: '',
    cardCounter: null,

    fetchData() {

        if (this.searchOption === '') {
            this.baseUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?&num=50&offset=0`;
        } else {
            this.baseUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${this.searchOption}&num=50&offset=0`
        }

        axios
            .get(this.baseUrl)
            .then(response => {
                this.data = response.data.data
                this.cardCounter = this.data.length;
            })
            .catch(error => {
                console.error(error);
            });

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