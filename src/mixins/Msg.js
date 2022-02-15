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
        let alerts = document.querySelectorAll('.alert-danger');

        if (alerts.length == 0) {
          for (const key in msgs) {
            let element = document.querySelector(`#${key}`);
            element.insertAdjacentHTML('afterend', `<div class="alert alert-danger" role="alert">${msgs[key]}</div>`);
          }
        }
      },
    }
  }

export default mgsMixing;
