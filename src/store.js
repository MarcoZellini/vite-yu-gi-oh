import { reactive } from 'vue'
import axios from '../node_modules/axios';

export const store = reactive({
    baseUrl: '',
    searchOption: '',
    data: null,

    fetchData() {
        console.log(this.searchOption);

        if (this.searchOption === '') {
            this.baseUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?&num=50&offset=0`;
        } else {
            this.baseUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${this.searchOption}&num=20&offset=0`
        }

        axios
            .get(this.baseUrl)
            .then(response => {
                this.data = response.data.data;
            })
            .catch(error => {
                console.error(error);
            });
    }

})