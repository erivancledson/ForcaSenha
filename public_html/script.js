$(function(){
        //keyup = para saber o que foi digitado
	$('#senha').bind('keyup', function(){
                 //pega o texto digitado
		var txt = $(this).val();
                //para o calculo da força da senha
		var forca = 0;
                //o que a senha precisa:
		// letras
		// numeros
		// caracteres especiais
		// min. de caracteres
                 
                 
		if(txt.length > 6) {
			forca += 25;
		}

		var reg = new RegExp(/[a-z]/i);
		if(reg.test(txt)) {
			forca += 25;
		}

		var reg = new RegExp(/[0-9]/i);
		if(reg.test(txt)) {
			forca += 25;
		}
                 //calculo de força de senha
		var reg = new RegExp(/[^a-z0-9]/i);
                //se tiver os criterios a acima ele vai aumentando a força
                //se eu colocar letra +25, numero + 25, senha tenha 6 ou mais carecteres +25, carc. especiais +25
		if(reg.test(txt)) {
			forca += 25;
		}

		if(forca >= 75) {
			var aceita = 'ACEITA';
		} else {
			var aceita = 'NÃO ACEITA';
		}
                  
		$('#forca').html('Força: '+forca+' ( '+txt+' ) - '+aceita);

	});

});