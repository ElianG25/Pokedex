// JavaScript Document

window.onload = function(){
	for (var p = 0; p < pokemons.length; p++) {
		$('#pokedex').append(
			'<div id="' + pokemons[p].numero + '" class="pokemon">' +
				'<a class="poke-boton" href="#">' + 
					'<img src="' + 'pokes/icons/' + pokemons[p].numero + '.png' + '" />' + 
					'<span>' + pokemons[p].nombre + '</span>' + 
				'</a>' + 
			'</div>'
		);
		botonChar(p);
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

/*
	<div class="pokemon">
		<?php
		if (strlen($poke->id) == 1) : $pokeID = '00'.$poke->id;
		elseif (strlen($poke->id) == 2) : $pokeID = '0'.$poke->id;
		else : $pokeID = $poke->id;
		endif;
		?>
		<div class="pokemon-foto">
			<div class="pokemon-foto-b" style="background-image:url(pokes/backs/<?php echo $pokeID; ?>.gif);"></div>
			<div class="pokemon-foto-f" style="background-image:url(pokes/front/<?php echo $pokeID; ?>.gif);"></div>
		</div>
		<div class="pokemon-info">
			<span class="pokemon-info-id">
				<?php echo $pokeID; ?>
			</span>
			<span class="pokemon-info-nombre">
				<?php echo $poke->nombre; ?>
			</span>
			<span class="pokemon-info-elementos">
				<img src="elementos/<?php echo $poke->elem1; ?>.gif" /> 
				<?php if ($poke->elem2 != '') : ?>
					<img src="elementos/<?php echo $poke->elem2; ?>.gif" />
				<?php endif; ?>
			</span>
		</div>
		<div class="pokemon-stats">
			<div class="pokemon-stats-info">Total:</div>
			<div class="pokemon-stats-bar" style="width:<?php echo ceil( ($poke->total / 720) * 250); ?>px; background-color:#F00; color:#FFF;"><?php echo $poke->total; ?></div>
			<br />
			<div class="pokemon-stats-info">Salud:</div>
			<div class="pokemon-stats-bar" style="width:<?php echo $poke->vid; ?>px;"><?php echo $poke->vid; ?></div>
			<br />
			<div class="pokemon-stats-info">Ataque:</div>
			<div class="pokemon-stats-bar" style="width:<?php echo $poke->atq; ?>px;"><?php echo $poke->atq; ?></div>
			<br />
			<div class="pokemon-stats-info">Defensa:</div>
			<div class="pokemon-stats-bar" style="width:<?php echo $poke->def; ?>px;"><?php echo $poke->def; ?></div>
			<br />
			<div class="pokemon-stats-info">Atq.Especial:</div>
			<div class="pokemon-stats-bar" style="width:<?php echo $poke->aes; ?>px;"><?php echo $poke->aes; ?></div>
			<br />
			<div class="pokemon-stats-info">Def.Especial:</div>
			<div class="pokemon-stats-bar" style="width:<?php echo $poke->des; ?>px;"><?php echo $poke->des; ?></div>
			<br />
			<div class="pokemon-stats-info">Velocidad:</div>
			<div class="pokemon-stats-bar" style="width:<?php echo $poke->vel; ?>px;"><?php echo $poke->vel; ?></div>
		</div>
	</div>
*/