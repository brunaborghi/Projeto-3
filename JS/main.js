
$(document).ready(function() {
    $('#carrossel-imagens').slick({ /* criando carrossel de imagens */
       autoplay: true,
    });
    $('.menu-hamburguer').click(function() { /* esconder o menu */
        $('nav').slideToggle();
    })
    $('#campo-telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____ '
    })
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculosDeInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form) {
            alert('Enviado com sucesso!!!')
            $('form input').val('');
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function() { /*leva ate a pagina de contas */
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();
        $('#veiculoDeInteressse').val(nomeVeiculo);
        
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

})

