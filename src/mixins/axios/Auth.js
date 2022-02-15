import axios from 'axios';
import msgMixin from '../Msg';

const axiosMixin = {
    mixins: [msgMixin],
    methods: {
        auth(e, path, route, createToken = false){
            axios.post(this.apiUrl+path, this.form)
                .then(response => {
                    if (createToken) {
                        localStorage.setItem('token', response.data.token);
                    }

                    this.hideErrors();
                    e.target.reset();
                    this.$router.push({name: route}); 
                })
                .catch(error => {
                    if (error.response) {
                        let errorMsgs = error.response.data.error.errors;
                        this.showErrors(errorMsgs)
                    }
                })
        },
    }
  }

export default axiosMixin;
