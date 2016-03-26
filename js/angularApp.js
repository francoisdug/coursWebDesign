var app = angular.module('angularData', []);


app.controller('DataController', ['$http','$scope','$filter', function($http,$scope,$filter){

	$scope.products=[];
	$scope.keys = [];
	//$scope.urlInitial='https://data.baltimorecity.gov/resource/3i3v-ibrt.json';
	$scope.urlInitial='http://www.ohouijoli.com/tests/dataTestCoursWebDesign.php';

	//charger les donnnées selon une URL
	$scope.updateUrl = function(urlSaisie) {
		//pour l'affiche de l'url dans la bar de recherche
		$scope.url=urlSaisie;
		//si recherche non vide
		if(urlSaisie!=''){
			$http.get($scope.url).success(function(data){
				$scope.products = data;
				$scope.keys = Object.keys($scope.products[0]);
				//pas d'affichage si url de départ
				if(urlSaisie===$scope.urlInitial){
					$scope.url='';
				}
			})
			.error(function(errormsg){
				alert("Aucune données à charger sur cet url");
				$scope.products=[];
			});
		}
	};
	$scope.updateUrl($scope.urlInitial);

	//pour ajouter une donnée
	$scope.updateData = function() {
		$scope.products.push($scope.visualisation);
		$scope.visualisation={};
	};
	$scope.updateData();//lancer la function une première fois

	//on enregistre selon nos filtre
	$scope.save = function () {
		$scope.savedJSON=$filter('orderBy')($scope.products, $scope.orderProp,$scope.direction);
		$scope.savedJSON=$filter('filter')($scope.savedJSON, $scope.searchText);
		//on affiche le tout en JSON
		$scope.savedJSON=JSON.stringify($scope.savedJSON,undefined,2);
	};

	//trié par nom de base
	$scope.direction = false;
	$scope.orderProp = "name";
	//fonction de trie
	$scope.sort = function(column) {
		if ($scope.orderProp === column) {
			$scope.direction = !$scope.direction;
		} else {
			$scope.orderProp = column;
			$scope.direction = true;
		}
	};

	//changer les icons lors du trie
	$scope.changeClass = function(column) {
		if(column===$scope.orderProp){
			if($scope.direction===true){
				return 'fa fa-sort-asc';
			}else{
				return 'fa fa-sort-desc';
			}
		}else{
			return 'fa fa-unsorted ';
		}
	};
	
	//enregistrer le JSON sur le PV
	$scope.saveToPc = function () {
		filename = 'download.json';
		data=$filter('orderBy')($scope.products, $scope.orderProp,$scope.direction);
		data=$filter('filter')(data, $scope.searchText);
		if (typeof data === 'object') {
			data = JSON.stringify(data,undefined,2);
			console.log(data);
		}

		var blob = new Blob([data], {type: 'text/json'}),
		e = document.createEvent('MouseEvents'),
		a = document.createElement('a');

		a.download = filename;
		a.href = window.URL.createObjectURL(blob);
		a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
		e.initEvent('click', true, false, window,
		0, 0, 0, 0, 0, false, false, false, false, 0, null);
		a.dispatchEvent(e);
	};
	$scope.test = function() {
		varr=$filter('orderBy')($scope.products, $scope.orderProp,$scope.direction);
		varr=$filter('filter')(varr, $scope.searchText);
		console.log(varr);
	};
	$scope.test();
}]);

///directive
app.directive('datatable', function(){
	return{
		restrict :'E',
		templateUrl:'datatable.html'
	};
});
///directive
app.directive('optiontable', function(){
	return{
		restrict :'E',
		templateUrl:'optiontable.html'
	};
});
///directive
app.directive('adddata', function(){
	return{
		restrict :'E',
		templateUrl:'adddata.html'
	};
});

//creation d'un filtre pour mettre la 1er lettre en majuscule
app.filter('ucfirst', function() {
	return function(input, scope) {
		if (input!=null)
		input = input.toLowerCase();
		return input.substring(0,1).toUpperCase()+input.substring(1);
	}
});