<!-- 
    Descrizione:
        Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout come da screenshot allegato.
        Al caricamento della pagina, effettuate una chiama ajax all'API di Yu Gi Oh (per chi non li conosce, é na cosa tipo pokemon
        https://db.ygoprodeck.com/api/v7/cardinfo.php e con i dati restituiti, stampate una card per ogni carta.
        
        ATTENZIONE:
        l’api restituisce tutti i risultati in un colpo solo :scream_cat:.
        :older_man: Per evitare attese e/o rallentamenti nelle richieste, potete diminuire il numero di risultati sfruttando i parametri num e offset
        https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0 (Dai comunque una letta alla documentazione dell'API di YGO)
        
        Bonus:
        Creare un componente loader da visualizzare fintantoché i risultati non sono pronti.
        Documentazione (README :point_down:):
        https://ygoprodeck.com/api-guide/
 -->



<script>
import AppHeader from './components/AppHeader.vue'
import { store } from './store.js'

export default {
    name: 'App',
    data() {
        return {
            store
        }
    },
    created() {
        store.fetchData()
    },
    components: {
        AppHeader,
    }

}

</script>

<template>
    <!-- <AppHeader></AppHeader> -->
    <AppHeader />

    <!-- <AppMain></AppMain> -->
    <main id="app_main">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                <div class="col">
                    <div class="card">

                    </div>
                    <!-- /.card -->
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->
    </main>
    <!-- /#app_main -->
</template>

<style></style>
