package br.com.vinicius.exercicio4;

import java.util.Scanner;

public class UsaProduto {
    public static void main(String[] args) {
       Scanner sc = new Scanner(System.in);
        System.out.println("Digite a marca do produto: ");
        String marca = sc.nextLine();

        System.out.println("Digite o fabricante do produto: ");
        String fabricante = sc.nextLine();

        System.out.println("Digite o código de barras do produto: ");
        String cod_barras = sc.nextLine();

        System.out.println("Digite o preço do produto: ");
        Double preco = sc.nextDouble();

        Produto produto1 = new Produto(marca, fabricante, cod_barras, preco);
        produto1.imprimirDados();

        Produto produto2 = new Produto();

        System.out.print("Digite a marca do produto: ");
        produto2.setMarca(sc.nextLine());

        System.out.print("Digite o fabricante do produto: ");
        produto2.setFabricante(sc.nextLine());

        System.out.print("Digite o código de barras do produto: ");
        produto2.setCod_barras(sc.nextLine());

        System.out.print("Digite o preço do produto: ");
        produto2.setPreco(sc.nextDouble());

        produto2.imprimirDados();

        sc.close();
    }
}
