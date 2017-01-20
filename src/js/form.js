var inputs = document.querySelectorAll('.call-back-form__input');

for (var i = 0; i < inputs.length; i++) {
  inputs[i].onfocus = function() {
    this.classList.add('call-back-form__input--focus')
  }
  
  inputs[i].onblur = function() {
    this.classList.remove('call-back-form__input--focus')
  }
}