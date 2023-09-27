import { reactive } from 'vue'
import axios from '../node_modules/axios';

export const store = reactive({
    baseUrl: `https://db.ygoprodeck.com/api/v7/cardinfo.php`, //base url for AJAX calls
    data: null, //data list returned by the fetchData function
    archetypeListUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php', //base url to get all archetypes
    archetypeList: null, //archetypes' list
    searchOption: null, //archetype filter value
    cardCounter: null, //number of data returned by the fetchData function
    maxPageElementNumber: '10', //max number of data rendered on a single page
    maxDataNumber: '', //max number of data that can be seen based on the archetype
    pageNumber: 0, //page number
    maxPages: null, //max number of pages


    /**
     * ### fetchData
     * > This function makes an AJAX Call and return all the data that can be used based on dynamic type, number and offset.
     * > If the AJAX Call can't be done it returns a console error.
     */
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

    /**
     * ### fetchFilters
     * > This function does an AJAX Call and returns all the filter that can be set
     * > If the AJAX Call can't be done it returns a console error.
     */
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

    /**
     * ### fetchDataFiltered
     * > This function does an AJAX Call and returns the number of page and the max data number that can be rendered based on a filter
     * > If the AJAX Call can't be done it returns a console error.
     */
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