<script>
                function validaCaracter(){​

var texto = document.formulario.nome.value;​

var letras = /^[A-Za-z]+$/​

if(texto.match(letras)){​

alert("Ok");​

}else{

alert("Digitar apenas letras");

}

}​
            </script>