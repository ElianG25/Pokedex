// JavaScript Document

window.onload = function(){
	for (var p = 0; p < pokemons.length; p++) {
		var parImpar = 'impar';
		
		if (p%2 == 0) {
			parImpar = 'par';
		}
		
		$('#pokedex').append(
			'<a class="pokemon ' + parImpar + '" id="' + pokemons[p].numero + '" href="#">' + 
				'<img src="' + 'pokes/icons/' + pokemons[p].numero + '.png' + '" />' + 
				'<span>' + pokemons[p].numero + ' - ' + pokemons[p].nombre + '</span>' + 
			'</a>'
		);
		//botonChar(p);
	}
}

function botonChar(num) {
	$('#' + pokemons[num].nombre + ' a').click(function(){
		pokemons[num].nombre
		pokemons[num].numero
		pokemons[num].elem1
		pokemons[num].elem2


/*----- UNIQUE SKILLS -----*/

		$('#pokeinfo').html('');	
		$('#pokeinfo').append(
			'<div class="pokemon">' + 
				'<h3>' + pokemons[num].unskills[us].nombre + '</h3>' + 
				'<table width="100%" border="0" cellspacing="0" cellpadding="0">' + 
					'<tr><td width="80">Daño</td><td>' + pokemons[num].unskills[us].poder + '</td></tr>' + 
					'<tr><td>Atributo</td><td>' + pokemons[num].unskills[us].atrib + '</td></tr>' + 
					'<tr><td>Elemento</td><td>' + pokemons[num].unskills[us].elem + '</td></tr>' + 
					'<tr><td>Altura</td><td>' + pokemons[num].unskills[us].alto + '</td></tr>' + 
					'<tr><td>Rango</td><td>' + pokemons[num].unskills[us].rango + '</td></tr>' + 
					'<tr><td>Info</td><td>' + pokemons[num].unskills[us].info + '</td></tr>' + 
				'</table>' + 
			'</div>'
		);


/*----- ANIMACION -----*/
		
		$('#ficha-char').show();
		$('#ficha-char').animate({opacity:0.9},500);
		$('#ficha-volver').click(function() {
			$('#ficha-char').animate({opacity:0},500, function(){
				$('#ficha-char').hide();
			});
		});
	});
}