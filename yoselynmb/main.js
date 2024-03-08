class vendedor {
    constructor(c, v, cl) {
        this.codigo = c
        this.ventas = v
        this.cliente = cl
    }
    rendimiento() {
        return (this.ventas / this.cliente) * 10
    }
}
class novato extends vendedor {
    constructor(c, v, cl, s) {
        super(c, v, cl)
        this.sueldo = s
    }
    bono() {
        return this.rendimiento() * 10
    }
    pagoMensual() {
        return this.bono() + this.sueldo
    }
}
class experto extends vendedor {
    constructor(c, v, cl, a) {
        super(c, v, cl)
        this.anualidad = a
    }

    bonificacion() {
        return (this.rendimiento() * 2) * 100
    }
    mensual() {
        return this.anualidad / 12
    }
    pagoMensual() {
        return this.mensual() + this.bonificacion()
    }

}
class Compania{
    constructor(apm,ce){
        this.acumPagoMensual = apm
        this.contExperto = ce

    }
    procesar(v){
        if (v instanceof experto){
            this.acumPagoMensual += v.pagoMensual()
            this.contExperto ++
        }
    }

    promedio(){
        return this.acumPagoMensual / this.contExperto
    }
}
function main() {

    let salida = document.getElementById("salida")
    let vendedor1 = new novato(11, 20, 100, 50)
    let vendedor2 = new novato(33, 40, 80, 100)
    let vendedor3 = new novato(55,15,60,150)
    let vendedor4 = new novato(66,10,50,50)

    let vendedor5 = new experto(22, 30, 40, 3000)
    let vendedor6 = new experto(77, 10, 25, 6000)
    let vendedor7 = new experto(99,60,120,12000)
    let vendedor8 = new experto(44,8,32,2400)
    
    let compania = new Compania(0,0)

    compania.procesar(vendedor1)
    compania.procesar(vendedor2)
    compania.procesar(vendedor3)
    compania.procesar(vendedor4)
    compania.procesar(vendedor5)
    compania.procesar(vendedor6)
    compania.procesar(vendedor7)
    compania.procesar(vendedor8)


    salida.innerHTML = "vendedores <br>";


    salida.innerHTML += `1) ${vendedor1.codigo} ${vendedor1.ventas} ${vendedor1.cliente} ${vendedor1.rendimiento()} ${vendedor1.bono()} ${vendedor1.pagoMensual()}<br>`
    salida.innerHTML += `2) ${vendedor2.codigo} ${vendedor2.ventas} ${vendedor2.cliente} ${vendedor2.rendimiento()} ${vendedor2.bono()}  ${vendedor2.pagoMensual()}<br>`
    salida.innerHTML += `3) ${vendedor3.codigo} ${vendedor3.ventas} ${vendedor3.cliente} ${vendedor3.rendimiento()} ${vendedor3.bono()} ${vendedor3.pagoMensual()}<br>`
    salida.innerHTML += `4) ${vendedor4.codigo} ${vendedor4.ventas} ${vendedor4.cliente} ${vendedor4.rendimiento()} ${vendedor4.bono()} ${vendedor4.pagoMensual()}<br>`
    salida.innerHTML += `5) ${vendedor5.codigo} ${vendedor5.ventas} ${vendedor5.cliente} ${vendedor5.bonificacion()} ${vendedor5.mensual()} ${vendedor5.pagoMensual()}<br>`
    salida.innerHTML += `6) ${vendedor6.codigo} ${vendedor6.ventas} ${vendedor6.cliente} ${vendedor6.bonificacion()} ${vendedor6.mensual()} ${vendedor6.pagoMensual()}<br>`
    salida.innerHTML += `7) ${vendedor7.codigo} ${vendedor7.ventas} ${vendedor7.cliente} ${vendedor7.bonificacion()} ${vendedor7.mensual()} ${vendedor7.pagoMensual()}<br>`
    salida.innerHTML += `8) ${vendedor8.codigo} ${vendedor8.ventas} ${vendedor8.cliente} ${vendedor8.bonificacion()} ${vendedor8.mensual()} ${vendedor8.pagoMensual()}<br>`
    salida.innerHTML += `Promedio: ${compania.promedio()}`

}



main()