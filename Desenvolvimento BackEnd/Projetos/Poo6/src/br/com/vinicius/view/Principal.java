package br.com.vinicius.view;

import br.com.vinicius.model.Produto;
import br.com.vinicius.model.Usuario;

public class Principal {
    public static void main(String[] args) {
        Usuario usuario = new Usuario("viniciusdev", "12345678");
        Produto produto = new Produto("Notebook Lenovo", 5);

        System.out.println("Validação do Usuário: " + (usuario.validar() ? "Válido" : "Inválido"));
        System.out.println("Validação do Produto: " + (produto.validar() ? "Válido" : "Inválido"));
        System.out.println("-------------------------------------------------");

        usuario.formatoSystemOut();
        produto.formatoSystemOut();
    }
}
