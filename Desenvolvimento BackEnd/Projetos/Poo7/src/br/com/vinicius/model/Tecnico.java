package br.com.vinicius.model;

public class Tecnico extends Funcionario {
    private String setor;

    public Tecnico() {}

    public Tecnico(String nome, String email, double salarioBase, String setor) {
        super(nome, email, salarioBase);
        setSetor(setor);
    }

    public String getSetor() {
        return setor;
    }

    public void setSetor(String setor) {
        if (setor == null || setor.isBlank()) {
            System.out.println("Setor não pode ser nulo ou vazio.");
        }
        this.setor = setor;
    }

    @Override
    public String getTipo() {
        return "Técnico";
    }

    @Override
    public void exibir() {
        System.out.println("=== Técnico ===");
        System.out.println("Nome: " + getNome());
        System.out.println("Email: " + getEmail());
        System.out.println("Salário Base: " + getSalarioBase());
        System.out.println("Setor: " + setor);
        System.out.println();
    }
}
