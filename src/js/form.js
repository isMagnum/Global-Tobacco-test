(function() {
  var inputs = document.querySelectorAll('.call-back-form__input');

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].onfocus = function() {
      var contain = this.classList.contains('call-back-form__input--focus');
      if (contain !== true) {
        this.classList.add('call-back-form__input--focus');
      } 
    }

    inputs[i].onblur = function() {
      if (this.value == "") {
        this.classList.remove('call-back-form__input--focus');
      }
    }
  }
})()