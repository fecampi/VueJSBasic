
// created by felipe campinho (still under development)
import Vue from 'vue'
Vue.mixin({
    methods: {
        save(resource, resources) {
            const method = this[resource].id ? "put" : "post";
            const id = this[resource].id ? `/${this[resource].id}` : "";
            this.$axios[method](`${resources}${id}`, this[resource])
                .then(() => {
                    this.$showSuccess();
                    this.reset();
                })
                .catch(this.$showError);
        },
        remove(resource, resources) {
            const id = this[resource].id;
            this.$axios
                .delete(`${resources}/${id}`)
                .then(() => {
                    this.$showSuccess();
                    this.reset();
                })
                .catch(this.$showError);
        },


    }
})