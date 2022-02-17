const mgsMixing = {
    methods: {
      hideErrors(){
        let alerts = document.querySelectorAll('.alert-danger');
        
        if (alerts.length > 0) {
              alerts.forEach(element => {
                element.remove();
            });
        }
      },
      showErrors(msgs){
          this.hideErrors();

          for (const key in msgs) {
            let element = document.querySelector(`#${key}`);
            element.insertAdjacentHTML('afterend', `<div class="alert alert-danger" role="alert">${msgs[key]}</div>`);
          }
      },
      showSuccessMsg(element, msg){
        element.reset();
        element.insertAdjacentHTML('afterend', `<div class="alert alert-success mt-5" role="alert">${msg}</div>`);
      }
    },
  }

export default mgsMixing;
