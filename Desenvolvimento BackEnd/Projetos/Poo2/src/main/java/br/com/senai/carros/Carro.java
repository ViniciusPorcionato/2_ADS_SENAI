/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.senai.carros;

/**
 *
 * @author 25170641
 */
public class Carro {
    private String modelo;
    private Integer ano;
    private Double preco;

    public Carro() {
    }

    public Carro(String modelo, Integer ano, Double preco) {
        this.modelo = modelo;
        this.ano = ano;
        this.preco = preco;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public Integer getAno() {
        return ano;
    }

    public void setAno(Integer ano) {
        this.ano = ano;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }
    
    public void aplicarDesconto(){
        if (this.preco > 90000.0) {
            this.preco = this.preco - ((this.preco * 12)/100);
        }else{
            this.preco = this.preco - ((this.preco * 6)/100);
        }
    }
    
    public void exibirInformacoes(){
        System.out.println("Modelo: " + this.modelo+"\n"+
                           "Ano: " + this.ano+"\n"+
                           "Preço: " + this.preco+"\n");
    }
    
    
}
