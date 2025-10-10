package br.com.vinicius.exercicio1;

public class Corrente extends Conta {
    private double limite;

    public Corrente(String banco, int agencia, int conta, double limite) {
        super(banco, agencia, conta);
        this.setLimite(limite);
    }

    public double getLimite() {
        return limite;
    }

    public void setLimite(double limite) {
        if (this.limite >= 0 && this.limite <= 100000){
            this.limite = limite;
        }
    }

    public String toString(){
        /*
        return "Banco: " + super.getBanco() +
                "\nAgencia: " + super.getAgencia() +
                "\nConta: " + super.getConta() +
                "\nSaldo: " + super.getSaldo() +
                "\nLimite: " + this.limite ; */
        return super.toString() + "\nLimite: " + this.limite;
    }

    public void sacar(double valor){
        if (valor <= super.getSaldo() + this.limite && valor > 0){
            super.setSaldo(super.getSaldo() - valor);
        }else{
            System.out.println("Saque inválido");
        }
    }

}
