import { reactive } from 'vue'
import axios from '../node_modules/axios';

export const store = reactive({
    data: null,

    fetchData() {
        axios
            .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
            .then(response => {
                this.data = response.data.data;
            })
            .catch(error => {
                console.error(error);
            });
    }

})