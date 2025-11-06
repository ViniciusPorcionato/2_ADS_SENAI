package br.com.vinicius.model;

public class Aluno extends Pessoa implements Exibivel {
    private String matricula;
    private int anoIngresso;

    public Aluno() {}

    public Aluno(String nome, String email, String matricula, int anoIngresso) {
        super(nome, email);
        setMatricula(matricula);
        setAnoIngresso(anoIngresso);
    }

    public String getMatricula() {
        return matricula;
    }

    public void setMatricula(String matricula) {
        if (matricula == null || !matricula.startsWith("A")) {
            System.out.println("Matrícula deve começar com 'A'.");
        }
        this.matricula = matricula;
    }

    public int getAnoIngresso() {
        return anoIngresso;
    }

    public void setAnoIngresso(int anoIngresso) {
        if (anoIngresso < 2000) {
            System.out.println("Ano de ingresso deve ser maior ou igual a 2000.");
        }
        this.anoIngresso = anoIngresso;
    }

    @Override
    public String getTipo() {
        return "Aluno";
    }

    @Override
    public void exibir() {
        System.out.println("=== Aluno ===");
        System.out.println("Nome: " + getNome());
        System.out.println("Email: " + getEmail());
        System.out.println("Matrícula: " + matricula);
        System.out.println("Ano de Ingresso: " + anoIngresso);
        System.out.println();
    }
}
