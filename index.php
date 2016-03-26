<?php
include("includes/header.php");
include("includes/header-menu.php");
?>
    <!-- Carousel
    ================================================== -->
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img class="first-slide" src="img/carousel/1.jpg" alt="First slide">
          <div class="container">
            <div class="carousel-caption">
              <h1>Charger facilement vos données JSON pour les visualiser</h1>
              <p>Afficher vos données JSON depuis URL, visualisez les dans un tableau qui s'adaptera à vos données.</p>
            </div>
          </div>
        </div>
        <div class="item">
          <img class="second-slide" src="img/carousel/2.jpg" alt="Second slide">
          <div class="container">
            <div class="carousel-caption">
              <h1>Ajoutez / Selectionnez / Ordonnez vos données puis exportez les !</h1>
              <p>Agencez vos données comme vous le souhaitez puis téléchargez votre nouveau fichier JSON</p>

            </div>
          </div>
        </div>
      </div>
      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
         <span class="icon-prev"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span class="icon-next"></span>
        <span class="sr-only">Next</span>
      </a>
    </div><!-- /.carousel -->

    <div class="container">
		 <div class="row">
			<div class="col-sm-12"><center><a class="btn btn-lg btn-success" href="generateur.php" role="button">Essayer ce merveilleux service !</a></center></div>
		 </div>
	 </div>

<?php
include("includes/footer.php");
include("includes/footer-end.php");
?>