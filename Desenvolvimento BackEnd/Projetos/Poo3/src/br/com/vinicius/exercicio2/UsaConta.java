package br.com.vinicius.exercicio2;

import javax.swing.*;

public class UsaConta {
    public static void main(String[] args) {
        int agencia = Integer.parseInt(JOptionPane.showInputDialog("Digite sua Agência: "));
        int numero = Integer.parseInt(JOptionPane.showInputDialog("Digite o número da sua conta:"));

        Conta c1 = new Conta(agencia, numero);
        c1.depositaValor(100);
        c1.sacarValor(50);
        JOptionPane.showMessageDialog(null, c1.imprimirDados());
    }
}
