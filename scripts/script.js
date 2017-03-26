const { dialog } = require('electron').remote;

angular.module('mailApp', [])
  .controller('MailController', ($scope) => {
    $scope.title = 'Erik write this';

    $scope.openFile = () => {
      dialog.showOpenDialog({
        properties: ['openFile'],
        filters: [
          {name: 'All Files', extensions: ['csv']}
        ]
      }, (fileName) => console.log(fileName));
    }
  });
