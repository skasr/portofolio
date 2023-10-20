function $scope(a){
  
  var app = angular.module('myApp',[]);
  
  app.controller('myController',function($scope){
    
    $scope.Mods = [
      {
        nom: 'Administration BD et Big Data',
        matieres: [
          {
            nom: 'DBA Oracle',
            note: 10
            },
          {
            nom: 'Bases de Données NoSQL',
            note: 10
            }
        ],
        coeff: 1,
        moyenne:0
      },
      {
        nom: 'Normes et Référentiels IT',
        matieres: [
          {
            nom: 'ITIL',
            note: 10
            },
          {
            nom: 'Cobit',
            note: 10
            }
        ],
        coeff: 1,
        moyenne:0
      },
      {
        nom: 'Génie Logiciel',
        matieres: [
          {
            nom: 'Architecture Applicative',
            note: 10
            },
          {
            nom: 'SOA',
            note: 10
            }
        ],
        coeff: 1,
        moyenne:0
      },
      {
        nom: 'Réseaux et Sécurité',
        matieres: [
          {
            nom: 'Architecture Réseaux et CISCO',
            note: 10
            },
          {
            nom: 'ISO 27001 & ISO 9001',
            note: 10
            }
        ],
        coeff: 1,
        moyenne:0
      },
      {
        nom: 'Gestion de Projet',
        matieres: [
          {
            nom: 'Gestion Financière des Projets',
            note: 10
            },
          {
            nom: 'Gestion Avancée des Projets et PMP',
            note: 10
            }
        ],
        coeff: 1,
        moyenne:0
      },
      {
        nom: 'Architecture des SI',
        matieres: [
          {
            nom: 'Schéma Directeur',
            note: 10
            }
        ],
        coeff: 1,
        moyenne:0
      },
      {
        nom: 'ERP et Métiers Fonctionnels',
        matieres: [
          {
            nom: 'ERP et SI Logistique',
            note: 10
            }
        ],
        coeff: 1,
        moyenne:0
      },
      {
        nom: 'PFE',
        matieres: [
          {
            nom: 'Projet de Fin d\'Études',
            note: 10
            }
        ],
        coeff: 4,
        moyenne:0
      }
    ];
    
    $scope.moy = function(){
      var total = 0;
      for (var i = 0; i < $scope.Mods.length; i++){
        for (var j = 0; j<$scope.Mods[i].matieres.length;j++){
          total += Number($scope.Mods[i].matieres[j].note);
        }
        var average = total/$scope.Mods[i].matieres.length;        
        $scope.Mods[i].moyenne = average;
        return average;
      }
    };//end method
    
    //$scope.moyenne();
    $scope.moyenne = function(obj){
      var total = 0;
      for (var i = 0; i < obj.matieres.length; i++){
        total += Number(obj.matieres[i].note);
      }
      var average = total/obj.matieres.length;        
      obj.moyenne = average;
      return average;
    };
    
    //general average
    $scope.moyGen = function(obj){
      var total = 0, coeffs = 0;
      for (var i = 0; i < obj.length; i++){
        total += (obj[i].moyenne * obj[i].coeff);
        coeffs += obj[i].coeff;
      }
      var genAvg = total/coeffs;
      return genAvg;
    };
    
    
  });//end controller
  
})();//end global closure