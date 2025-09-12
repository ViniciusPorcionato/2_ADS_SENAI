/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.senai.carros;

/**
 *
 * @author 25170641
 */
public class UsaClassesCarro {
    public static void main(String[] args) {
        Carro car1 = new Carro("Volkswagen Polo GTS", 2025, 158590.0);
        Carro car2 = new Carro("Chevrolet Onix 1.0", 2025, 93770.0);
        Carro car3 = new Carro("Renault Kwid Zen 1.0", 2025, 77240.0);
        
        car1.aplicarDesconto();
        car1.exibirInformacoes();
        
        car2.aplicarDesconto();
        car2.exibirInformacoes();
        
        car3.aplicarDesconto();
        car3.exibirInformacoes();
    }
}
