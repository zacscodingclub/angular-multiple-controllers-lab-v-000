function ContactController() {
  this.name = 'Other Name';
  this.email = 'other@email.com';
  this.phone = '222-444-6666';

  var vm = this;
  
  this.changeName = function() {
    vm.name = 'New Name';
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);
