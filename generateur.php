<?php
include("includes/header.php");
include("includes/header-menu.php");
?>

    <div class="jumbotron">
      <div class="container">
        <h1>Afficher n'importe quel JSON</h1>
        <p>Vous avez un jeu de données à afficher ? Vérifier son contenu grâce à notre interface ! Entrez l'url de votre jeu de donnée ci-dessous et profitez :</p>
        <form name="ajoutJson" ng-submit="updateUrl(url)">
			<div class="col-sm-10"><input type="url" name="url" class="form-control" id="urlJson" placeholder="Exemple : {{urlInitial}}" ng-model="url"></div>
			<div class="col-sm-2"><input type="submit" value="Charger" class="btn btn-default"  /></div>
		</form>
      </div>
    </div>

    <div class="container">
		<adddata></adddata>
		<optiontable></optiontable>
		<datatable></datatable>
	</div>

<?php
include("includes/footer.php");
include("includes/footer-end.php");
?>