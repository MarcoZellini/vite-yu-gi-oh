import { reactive } from 'vue'
import axios from '../node_modules/axios';

export const store = reactive({
    baseUrl: `https://db.ygoprodeck.com/api/v7/cardinfo.php`, //url di base per le chiamate ajax
    data: null, //lista delle card
    archetypeListUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php', //link da cui recuperare tutti gli archetype
    archetypeList: null, //lista di tutti gli archetype
    searchOption: null, //valore usato per filtrare le ricerche per archetype
    cardCounter: null, //
    maxPageElementNumber: '10', //numero di dati visualizzati in pagina
    maxDataNumber: '', //numero totale di dati ottenuti
    pageNumber: 0, //numero della pagina
    maxPages: null, //numero massimo di pagine

    fetchData() {

        axios
            .get(this.baseUrl, {
                params: {
                    archetype: this.searchOption,
                    num: this.maxPageElementNumber,
                    offset: (this.pageNumber * this.maxPageElementNumber)
                }
            })
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
    },

    fetchDataFiltered() {
        axios
            .get(this.baseUrl, {
                params: {
                    archetype: (this.searchOption === '' ? this.searchOption = null : this.searchOption)
                }
            })
            .then(response => {
                this.maxDataNumber = response.data.data.length;
                this.maxPages = this.maxDataNumber / this.maxPageElementNumber;
            })
            .catch(error => {
                console.error(error);
            });
    }

})