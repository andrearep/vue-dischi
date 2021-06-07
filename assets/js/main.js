const app = new Vue({
    el: "#root",

    data: {
        songs: ""
    },

    methods: {

    },

    mounted() {
        axios.
            get("https://flynn.boolean.careers/exercises/api/array/music")
            .then(resp => {
                this.songs = resp.data.response;
            })
    }
})