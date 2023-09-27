import { reactive } from 'vue'
import axios from '../node_modules/axios';

export const store = reactive({
    baseUrl: `https://db.ygoprodeck.com/api/v7/cardinfo.php`, //url di base per le chiamate ajax
    data: null, //lista delle card
    archetypeListUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php', //link da cui recuperare tutti gli archetype
    archetypeList: null, //lista di tutti gli archetype
    searchOption: '', //valore usato per filtrare le ricerche per archetype
    cardCounter: null, //
    maxPageElementNumber: '10', //numero di dati visualizzati in pagina
    maxDataNumber: '', //numero totale di dati ottenuti
    pageNumber: 0, //numero della pagina
    maxPages: null, //numero massimo di pagine

    fetchData(url) {

        axios
            .get(url)
            .then(response => {
                console.log(response.config.url);
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
    },

    fetchDataFiltered() {

        let url;

        if (this.searchOption !== '') {
            url = this.baseUrl + `?archetype=${this.searchOption}`;
        } else {
            url = this.baseUrl;
        }


        axios
            .get(url)
            .then(response => {
                console.log(response.data.data.length);
                this.maxDataNumber = response.data.data.length;
                this.maxPages = this.maxDataNumber / this.maxPageElementNumber;
            })
            .catch(error => {
                console.error(error);
            });
    }

})