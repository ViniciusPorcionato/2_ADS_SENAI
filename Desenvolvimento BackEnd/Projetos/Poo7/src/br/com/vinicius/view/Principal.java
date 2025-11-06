package br.com.vinicius.view;

import br.com.vinicius.model.Aluno;
import br.com.vinicius.model.Professor;
import br.com.vinicius.model.Tecnico;

public class Principal {
    public static void main(String[] args) {
        try {
            Aluno a1 = new Aluno("maria silva", "maria@escola.com", "A123", 2021);
            Aluno a2 = new Aluno("joão", "joao@escola.com", "A456", 2023);

            Professor p1 = new Professor("Carlos", "carlos@escola.com", 3000, 20);
            Professor p2 = new Professor("Fernanda", "fernanda@escola.com", 4000, 40);

            Tecnico t1 = new Tecnico("Rafael", "rafael@escola.com", 2500, "TI");
            Tecnico t2 = new Tecnico("Luciana", "luciana@escola.com", 2800, "Administração");

            a1.exibir();
            a2.exibir();
            p1.exibir();
            p2.exibir();
            t1.exibir();
            t2.exibir();

            System.out.println("=== Teste de validação ===");
            Aluno erro = new Aluno("Pedro", "pedroescola.com", "B789", 1999);

        } catch (IllegalArgumentException e) {
            System.out.println("Erro de validação: " + e.getMessage());
        }
    }
}
