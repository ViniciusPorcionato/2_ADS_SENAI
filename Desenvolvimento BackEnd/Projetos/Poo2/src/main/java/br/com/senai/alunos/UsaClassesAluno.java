package br.com.senai.alunos;

public class UsaClassesAluno {
    public static void main(String[] args) {
        Aluno aluno1 = new Aluno("Vinicius Porcionato", "Análise e Desenvolvimento de Sistemas", 2024, 16, 9.5);

        Aluno aluno2 = new Aluno("Catarina Sayuri Arashiro Braga Felipe", "Engenharia de Software", 2024, 16, 9.5);

        aluno1.calcularSemestresConcluidos();
        aluno1.aprovado();
        aluno1.mostrarInfo();

        aluno2.calcularSemestresConcluidos();
        aluno2.aprovado();
        aluno2.mostrarInfo();
    }

}
