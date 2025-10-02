package Exercicio1;

public class BibliotecaUniPP {
    public static void main(String[] args) {

        Livro livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1200);
        Livro livro2 = new Livro("Dom Casmurro", "Machado de Assis", 300);
        Livro livro3 = new Livro("Clean Code", "Robert C. Martin", 500);

        livro1.emprestar();
        livro1.ler(600);
        livro1.exibirInformacoes();
        System.out.println("Progresso: " + livro1.verProgresso() + "%\n");
        livro1.devolver();

        livro2.emprestar();
        livro2.ler(100);
        livro2.exibirInformacoes();
        System.out.println("Progresso: " + livro2.verProgresso() + "%\n");
        livro2.devolver();

        livro3.emprestar();
        livro3.ler(250);
        livro3.exibirInformacoes();
        System.out.println("Progresso: " + livro3.verProgresso() + "%\n");
        livro3.devolver();

    }
}
