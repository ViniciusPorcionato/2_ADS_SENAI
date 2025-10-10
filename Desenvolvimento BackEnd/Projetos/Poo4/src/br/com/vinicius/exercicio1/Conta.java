package br.com.vinicius.exercicio1;

public class Conta {
    private String banco;
    private int agencia;
    private int conta;
    private double saldo;

    public Conta(String banco, int agencia, int conta) {
        this.setBanco(banco);;
        this.setAgencia(agencia);;
        this.setConta(conta);
        this.saldo = 0;
    }

    public String getBanco() {
        return banco;
    }

    public void setBanco(String banco) {
        if (banco.length() > 2){
            this.banco = banco;
        }else{
            System.out.println("Nome dde banco inválido");
        }
    }

    public int getAgencia() {
        return agencia;
    }

    public void setAgencia(int agencia) {
        if (agencia > 0 && agencia < 1000){
            this.agencia = agencia;
        }else{
            System.out.println("Agencia inválida");
        }
    }

    public int getConta() {
        return conta;
    }

    public void setConta(int conta) {
        if (conta > 0 && conta < 10000){
            this.conta = conta;
        }else{
            System.out.println("Conta inválida");
        }
    }

    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public  String toString(){
        return "Banco: " + this.banco +
                "\nAgencia: " + this.agencia +
                "\nConta: " + this.conta +
                "\nSaldo: " + this.saldo;
    }

    public void depositar(double valor){
        if (valor > 0){
            this.saldo += valor;
        }else{
            System.out.println("Deposito inválido");
        }
    }

    public void sacar(double valor){
        if (valor <= this.saldo && valor > 0){
            this.saldo -= valor;
        }else{
            System.out.println("Saque inválido");
        }
    }


}
