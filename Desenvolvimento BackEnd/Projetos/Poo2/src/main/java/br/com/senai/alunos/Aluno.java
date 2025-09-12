package br.com.senai.alunos;

public class Aluno {
    private String nome;
    private String curso;
    private Integer anoIngresso;
    private Integer numeroDisciplinas;
    private Double media;

    public Aluno(String nome, String curso, Integer anoIngresso, Integer numeroDisciplinas, Double media) {
        this.nome = nome;
        this.curso = curso;
        this.anoIngresso = anoIngresso;
        this.numeroDisciplinas = numeroDisciplinas;
        this.media = media;
    }

    public Aluno() {
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    public Integer getAnoIngresso() {
        return anoIngresso;
    }

    public void setAnoIngresso(Integer anoIngresso) {
        this.anoIngresso = anoIngresso;
    }

    public Integer getNumeroDisciplinas() {
        return numeroDisciplinas;
    }

    public void setNumeroDisciplinas(Integer numeroDisciplinas) {
        this.numeroDisciplinas = numeroDisciplinas;
    }

    public Double getMedia() {
        return media;
    }

    public void setMedia(Double media) {
        this.media = media;
    }

    public int calcularSemestresConcluidos(){
        int anoAtual = 2025;
        int anosCursados = anoAtual - anoIngresso;
        return  anosCursados * 2;
    }

    public Boolean aprovado(){
        if (this.media >= 6.0){
            return true;
        } else {
            return false;
        }
    }

    public void mostrarInfo() {
        System.out.println("Nome: " + this.nome);
        System.out.println("Curso: " + this.curso);
        System.out.println("Ano de ingresso: " + this.anoIngresso);
        System.out.println("Disciplinas cursadas: " + this.numeroDisciplinas);
        System.out.println("Média geral: " + this.media);
        System.out.println("Semestres concluídos: " + this.calcularSemestresConcluidos());
        System.out.println("Aprovado: " + (this.aprovado() ? "Sim" : "Não"));
        System.out.println("--------------------------------------------------");
    }
}
