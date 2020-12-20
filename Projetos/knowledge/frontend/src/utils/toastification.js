import Vue from "vue";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const options = {
    timeout: 3000,
};

Vue.use({
    install(Vue) {
        Vue.prototype.$showSuccess = (msg) => {
            (!msg) && (msg = 'Operação realizada com sucesso!')
            Vue.$toast.success(msg);
        },
        Vue.prototype.$showError = (e) => {
            if(e && e.response && e.response.data) {
                Vue.$toast.error(e.response.data);
            } else if(typeof e === 'string') {
                Vue.$toast.error(e);
            } else {
                Vue.$toast.error('Oops.. Erro inesperado! ');
            }
        }

    }
})

Vue.use(Toast, options);

