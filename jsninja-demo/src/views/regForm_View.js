import { View } from 'backbone';
import regForm from './regForm.html';

const registrationView = View.extend({
  el: '#content',

  render: function () {
    this.$el.append(regForm);
  },

  initialize: function () {
    this.render();
    document.querySelector('#regSend').addEventListener('click', this.validate);
  },

  validate: function (e) {
    e.preventDefault();
    //var validateBtn = document.querySelector('#regSend');
    var email =  document.querySelector('#email').value;
    var password = document.querySelector('#password').value;
    var password_confirmation = document.querySelector('#password_confirmation').value;
    var regexpEmail = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/;
    var regexpPass = /(?=.​*\d*).{6,}/;
    var error = document.querySelector('#errInfo');
    regexpEmail.test(email);
    error.textContent = '';
    if (!regexpEmail.test(email)) {
      error.textContent += "Invalid email'\n'";
    }
    if (!regexpPass.test(password)) {
      error.textContent += "Password must have minimum 6 symbols(including one number)'\n'";
    }
    if (password !== password_confirmation) {
      error.textContent += "Passwords don't matches'\n'";
    }

  }


});

export default registrationView;
