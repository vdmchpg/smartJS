import { Router, history } from 'backbone';
import registrationView from './views/regForm_View';

document.querySelector('#regOpen').addEventListener('click', function () {
  var view = new registrationView();
});
