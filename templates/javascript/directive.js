(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name <%= scriptAppName %>.directive:<%= cameledName %>
   * @description
   * # <%= cameledName %>
   */
  angular
    .module('<%= scriptAppName %>')
    .directive('<%= cameledName %>', <%= cameledName %>);

  function <%= cameledName %>() {
    var directive = {
      restrict: 'EA',
      template: '<div></div>',
      scope: true,
      controller: <%= classedName %>Controller,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }

  function <%= classedName %>Controller() {
    var vm = this;
  }
})();
