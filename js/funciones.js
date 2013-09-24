// JavaScript Document

window.onload = function(){
	for (var p = 0; p < pokemons.length; p++) {
		$('#select-char').append(
			'<div id="' + pokemons[p].numero + '" class="pokemon">' +
				'<a class="poke-boton" href="#">' + 
					'<img src="' + 'pokes/icons/' + pokemons[p].numero + '.png' + '" />' + 
					'<p>' + pokemons[p].nombre + '</p>' + 
				'</a>' + 
			'</div>'
		);
		botonChar(p);
	}
}

function botonChar(num) {
	$('#' + pokemons[num].nombre + ' a').click(function(){
		var fichaNombre = pokemons[num].nombre.split("_");
		fichaNombre = fichaNombre.join(" ");

/*----- CLASES -----*/
		var fichaClases = '';
		var claseNombre = '';
		
		for (var f = 0; f < pokemons[num].clases.length; f++) {
			claseNombre = pokemons[num].clases[f].nombre.split("_");
			claseNombre = claseNombre.join(" ");
			
			if (lista == monsters) {
				fichaClases = fichaClases + 
					'<div class="ficha-clase">' + 
						'<img src="disgaea/M_' + pokemons[num].nombre + '_0' + (f + 1) + '.gif" />' +
						'<p><b>' + claseNombre + '</b> : ' + pokemons[num].clases[f].requiere + '</p>' +
					'</div>';
			} else {
				fichaClases = fichaClases + 
					'<div class="ficha-clase">' + 
						'<img src="disgaea/D_' + pokemons[num].nombre + '_0' + (f + 1) + '.gif" />' +
						'<p><b>' + claseNombre + '</b> : ' + pokemons[num].clases[f].requiere + '</p>' +
					'</div>';
			}
		}


/*----- SKILLS -----*/


		var fichaSkills = '';		
		for (var s = 0; s < pokemons[num].skills.length; s++) {
			fichaSkills = fichaSkills + 
				'<div class="ficha-skill">' + 
					'<h3>' + pokemons[num].skills[s] + '</h3>' + 
					'<table width="100%" border="0" cellspacing="0" cellpadding="0">' + 
						'<tr><td width="80">Daño</td><td>C</td></tr>' + 
						'<tr><td>Atributo</td><td>ATK</td></tr>' + 
						'<tr><td>Elemento</td><td>Fuego</td></tr>' + 
						'<tr><td>Altura</td><td>20/20</td></tr>' + 
						'<tr><td>Rango</td><td>[ imagen ]</td></tr>' + 
						'<tr><td>Info</td><td>Puede quemar a los enemigos</td></tr>' + 
					'</table>' + 
				'</div>';
		}


/*----- UNIQUE SKILLS -----*/


		var fichaUnSkills = '';		
		for (var us = 0; us < pokemons[num].unskills.length; us++) {
			fichaUnSkills = fichaSkills + 
				'<div class="ficha-skill">' + 
					'<h3>' + pokemons[num].unskills[us].nombre + '</h3>' + 
					'<table width="100%" border="0" cellspacing="0" cellpadding="0">' + 
						'<tr><td width="80">Daño</td><td>' + pokemons[num].unskills[us].poder + '</td></tr>' + 
						'<tr><td>Atributo</td><td>' + pokemons[num].unskills[us].atrib + '</td></tr>' + 
						'<tr><td>Elemento</td><td>' + pokemons[num].unskills[us].elem + '</td></tr>' + 
						'<tr><td>Altura</td><td>' + pokemons[num].unskills[us].alto + '</td></tr>' + 
						'<tr><td>Rango</td><td>' + pokemons[num].unskills[us].rango + '</td></tr>' + 
						'<tr><td>Info</td><td>' + pokemons[num].unskills[us].info + '</td></tr>' + 
					'</table>' + 
				'</div>';
		}


/*----- EVILITIES -----*/


		var fichaEvility = '';		
		for (var s = 0; s < pokemons[num].evility.length; s++) {
			fichaEvility = fichaEvility + 
				'<div class="ficha-skill">' + 
					'<h3>' + pokemons[num].evility[s] + '</h3>' + 
					'<p><b>Requiere Phantom Nv 30</b></p>' + 
					'<p>Esta es una habilidad muy bakan xD</p>' + 
				'</div>';
		}

		
/*----- UNIQUE EVILITIES -----*/


		var fichaUnEvility = '';
		for (var ue = 0; ue < pokemons[num].unevility.length; ue++) {
			fichaUnEvility = fichaUnEvility + 
				'<div class="ficha-skill">' + 
					'<h3>' + pokemons[num].unevility[ue].nombre + '</h3>' + 
					'<p><b>' + pokemons[num].unevility[ue].requiere + '</b></p>' + 
					'<p>' + pokemons[num].unevility[ue].info + '</p>' + 
				'</div>';
		}
		
		$('#ficha-char').html(
			'<div id="ficha-titulo">' + 
				'<h1>' + fichaNombre + '</h1>' + 
				'<a id="ficha-volver" href="#">[ volver ]</a>' + 
			'</div>' + 
			'<div class="ficha-clases">' + 
				'<h2>CLASES: </h2>' + fichaClases + 
			'</div>' + 
			'<div class="ficha-skills">' + 
				'<h2>SKILLS: </h2>' + fichaSkills + 
			'</div>' + 
			'<div class="ficha-unskills">' + 
				'<h2>SKILLS UNICAS: </h2>' + fichaUnSkills + 
			'</div>' + 
			'<div class="ficha-evilities">' + 
				'<h2>EVILITIES: </h2>' + fichaEvility + 
			'</div>' + 
			'<div class="ficha-unevilities">' + 
				'<h2>EVILITIES UNICAS: </h2>' + fichaUnEvility + 
			'</div>'
		);
		
		$('#ficha-char').show();
		$('#ficha-char').animate({opacity:0.9},500);
		$('#ficha-volver').click(function() {
			$('#ficha-char').animate({opacity:0},500, function(){
				$('#ficha-char').hide();
			});
		});
	});
}