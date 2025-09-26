package br.com.vinicius.exercicio1;

public class UsaSobrecarga {
    public static void main(String[] args) {

        Sobrecarga obj_sobrecarga = new Sobrecarga();
        double resultado = obj_sobrecarga.somar(5.0, 4.0);
        System.out.println(resultado);

        System.out.println(obj_sobrecarga.somar(2.0, 3.5, 9.0));

    }
}
