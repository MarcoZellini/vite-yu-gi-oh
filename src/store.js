import { reactive } from 'vue'
import axios from '../node_modules/axios';

export const store = reactive({
    fetchData() {
        axios
            .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=metal%20raiders&num=20&offset=0')
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

})