class CuentaBancaria{
    
    constructor(titular,saldoInicial){
        this.titular=titular;
        this.saldo=saldoInicial;
    }

    depositar(monto){
        this.saldo+=monto;
        document.write(`Se ha depositado $${monto} <br>`);
    }

    retirar(monto){
        if(monto <= this.saldo){
            this.saldo -= monto;
            document.write(`Se ha retirado $${monto} <br>`);
        } else{
            document.write('Fondos insuficientes <br>');
        }

    }

    verSaldo(){
        document.write(`El saldo actual es $${this.saldo} y el propetario es ${this.titular}<br>`);
    }

}

const cuenta1 = new CuentaBancaria('Miguel', 500);
cuenta1.depositar(400);
cuenta1.verSaldo();
cuenta1.retirar(800);
cuenta1.verSaldo();
cuenta1.retirar(300);