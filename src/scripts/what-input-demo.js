import whatInput from "./what-input";

console.log('Log to make sure "what-input-demo.js" is working');

// use `whatInput.ask()`
    let links = document.querySelectorAll('.well a, .well button')
    for (let i = 0, len = links.length; i < len; i++) {
      links[i].addEventListener('click', function (event) {
        console.log(
          '[script test] ' + whatInput.ask() + ' ' + whatInput.element()
        )

        event.preventDefault()
      })
    }

    let formControls = document.querySelectorAll('input, textarea, select')
    for (let i = 0, len = formControls.length; i < len; i++) {
      formControls[i].addEventListener('click', function (event) {
        console.log(
          '[script test] ' + whatInput.ask() + ' ' + whatInput.element()
        )
      })
    }

    // use `whatInput.registerOnChange()`
    let myInputFunction = function (type) {
      console.log('input: ' + type)
    }

    let myIntentFunction = function (type) {
      console.log('intent: ' + type)
    }

    whatInput.registerOnChange(myInputFunction)
    whatInput.registerOnChange(myIntentFunction, 'intent')

    // don't let the form submit because it's not real
    let form = document.querySelector('form')
    form.addEventListener('submit', function (event) {
      event.preventDefault()
    })

    // console-log functionality
    let logs = document.querySelectorAll('[data-module="console-log"]')
    for (let i = 0, len = logs.length; i < len; i++) {
      logs[i].addEventListener('click', function (event) {
        // alert(this.dataset.message);
        console.log(this.dataset.message);
        event.preventDefault()
      })
    }