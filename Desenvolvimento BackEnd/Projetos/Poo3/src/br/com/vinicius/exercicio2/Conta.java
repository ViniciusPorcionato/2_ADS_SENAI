package br.com.vinicius.exercicio2;

public class Conta {

    private int numero;
    private int agencia;
    private double saldo;

    public Conta() {
    }

    public Conta(int numero, int agencia) {
//        this.numero = numero;
//        this.agencia = agencia;
        this.setAgencia(agencia);
        this.setNumero(numero);
        this.setSaldo(100);
    }

    public Conta(int numero) {
        this.agencia = 1500;
        this.setNumero(numero);
        this.setSaldo(0);
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        if (numero >= 10000 && numero <= 20000) {
            this.numero = numero;
        } else {
            System.out.println("Número inválido");
        }
    }

    public int getAgencia() {
        return agencia;
    }

    public void setAgencia(int agencia) {
        if (agencia >= 1 && agencia <= 9999) {
            this.agencia = agencia;
        } else {
            System.out.println("Agência inválida");
        }
    }

    public double getSaldo() {
        return saldo;
    }

    private void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public Boolean depositaValor(double valor) {
        if (valor > 0) {
            this.setSaldo(this.getSaldo() + valor);
            return true;
        } else {
            System.out.println("Valor de depósito inválido");
            return false;
        }
    }

    public Boolean sacarValor(double valor) {
        if (this.getSaldo() > 0 && valor > 0 && valor <= this.getSaldo()) {
            this.setSaldo(this.getSaldo() - valor);
            return true;
        } else {
            System.out.println("Valor de saque inválido");
            return false;
        }
    }

    public String imprimirDados(){
        return("Agência: " + this.agencia
                + "\nConta: " + this.numero
                + "\nSaldo: " + this.saldo);
    }
}
