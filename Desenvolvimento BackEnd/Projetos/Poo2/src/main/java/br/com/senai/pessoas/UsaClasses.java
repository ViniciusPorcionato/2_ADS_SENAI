package br.com.senai.pessoas;


public class UsaClasses {
    public static void main(String[] args) {
        
        Pessoa p1 = new Pessoa();
        Pessoa p2 = new Pessoa();
        
        p1.nome = "Vinicius";
        p1.idade = 20;
        p1.salario = 1001.0;
        p1.vendas = 5000;
        
        p2.nome = "Miguel";
        p2.idade = 19;
        p2.salario = 1000.0;
        p2.vendas = 12000;
        
        System.out.println(p1.calcularComissao());
        System.out.println(p1.toString());
        p1.bonificar();
        p1.atualizaRenda(p1.salario);
        
        System.out.println(p2.calcularComissao());
        System.out.println(p2.toString());
        p2.bonificar();
        p2.atualizaRenda(p2.salario);
        
    }
 
}
