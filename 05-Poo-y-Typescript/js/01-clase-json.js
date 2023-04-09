var bicicleta ={
    color: 'Rojo', 
    modelo: 'BMX',
    frenos:'De Disco',
    velocidadMaxima: '60km',
    cambiaColor: function(nuevo_color){
        this.color = nuevo_color
    }
}
bicicleta.cambiaColor("Marron")
