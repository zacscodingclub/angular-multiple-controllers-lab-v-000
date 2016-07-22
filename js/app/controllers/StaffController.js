function StaffController($scope) {
  this.name = 'Some Name';
  this.email = 'user@email.com';
  this.phone = '111-333-5555';

  var vm = this;
}

angular
  .module('app')
  .controller('StaffController', StaffController);
