package br.com.vinicius.model;

public abstract class Funcionario extends Pessoa implements Exibivel {
    private double salarioBase;

    public Funcionario() {}

    public Funcionario(String nome, String email, double salarioBase) {
        super(nome, email);
        setSalarioBase(salarioBase);
    }

    public double getSalarioBase() {
        return salarioBase;
    }

    public void setSalarioBase(double salarioBase) {
        if (salarioBase < 0) {
            System.out.println("Salário base deve ser maior ou igual a zero.");
        }
        this.salarioBase = salarioBase;
    }
}
