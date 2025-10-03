package Exercicio2;

public class MercadorApp {
    public static void main(String[] args) {
        Produto p1 = new Produto("Caneta", 2.5, 10);
        Produto p2 = new Produto("Caderno", 15.0, 4);
        Produto p3 = new Produto("Borracha", 1.0, 2);

        System.out.println("=== Antes das operações ===");
        p1.exibirInformacoes();
        p2.exibirInformacoes();
        p3.exibirInformacoes();

        p1.vender(3);
        p2.comprar(10);
        p3.vender(1);

        System.out.println("\n=== Depois das operações ===");
        p1.exibirInformacoes();
        p2.exibirInformacoes();
        p3.exibirInformacoes();
    }
}
