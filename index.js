class cliente {
  nombreCliemete
  dniClienete
  numeroCuenta
  saldoCuenta
}

class cuentaCorriente {
  numero
  saldo
  agencia

  constructor() {
    this.saldo = 0
    this.numero = ''
    this.agencia = ''
  }

  depositoEnCuenta(valor) {
    if (valor > 0) {
      this.saldo = this.saldo + valor
    }
  }

  retirarDeCuenta(valor) {
    if (valor <= this.saldo) {
      this.saldo = this.saldo - valor
    }
  }
}

const cliente1 = new cliente()
cliente1.nombreCliemete = 'jose'
cliente1.dniClienete = '1522125'
cliente1.numeroCuenta = '5515484'
cliente1.saldoCuenta = '5'

const cliente2 = new cliente()
cliente1.nombreCliemete = 'jose'
cliente1.dniClienete = '1522125'
cliente1.numeroCuenta = '5515484'
cliente1.saldoCuenta = '5'

const cuentaCorriente1 = new cuentaCorriente()
cuentaCorriente1.numero = 2334
cuentaCorriente1.saldo = 234324
cuentaCorriente1.agencia = 'lui'

const cuentaCorriente2 = new cuentaCorriente()
cuentaCorriente2.numero = 2334
cuentaCorriente2.saldo = 234324
cuentaCorriente2.agencia = 'lui'

const curntaLeonardo = new cuentaCorriente()

curntaLeonardo.depositoEnCuenta(500)
console.log(curntaLeonardo)
curntaLeonardo.retirarDeCuenta(500)
console.log(curntaLeonardo)
