package br.com.vinicius.model;

public class Professor extends Funcionario{
    private int horasSemana;

    public Professor() {}

    public Professor(String nome, String email, double salarioBase, int horasSemana) {
        super(nome, email, salarioBase);
        setHorasSemana(horasSemana);
    }

    public int getHorasSemana() {
        return horasSemana;
    }

    public void setHorasSemana(int horasSemana) {
        if (horasSemana < 1 || horasSemana > 44) {
            System.out.println("Horas semanais devem estar entre 1 e 44.");
        }
        this.horasSemana = horasSemana;
    }

    public double calcularSalario() {
        return getSalarioBase() + (horasSemana * 50);
    }

    @Override
    public String getTipo() {
        return "Professor";
    }

    @Override
    public void exibir() {
        System.out.println("=== Professor ===");
        System.out.println("Nome: " + getNome());
        System.out.println("Email: " + getEmail());
        System.out.println("Salário Base: " + getSalarioBase());
        System.out.println("Horas Semana: " + horasSemana);
        System.out.println("Salário Total: " + calcularSalario());
        System.out.println();
    }
}
