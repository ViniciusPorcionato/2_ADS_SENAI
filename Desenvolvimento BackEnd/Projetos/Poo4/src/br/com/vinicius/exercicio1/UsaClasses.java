package br.com.vinicius.exercicio1;

public class UsaClasses {
    public static void main(String[] args) {
        Corrente cc = new Corrente("Itau", 011, 1122, 1000 );
        cc.depositar(1200);
        cc.sacar(1100);
        System.out.println(cc);

        Poupanca cp = new Poupanca("Itau", 011, 1122, 14);
        cp.depositar(100);
        cp.sacar(100);
        System.out.println(cp);
    }
}
