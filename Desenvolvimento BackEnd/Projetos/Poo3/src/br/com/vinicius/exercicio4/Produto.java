package br.com.vinicius.exercicio4;

public class Produto {

    private String marca;
    private String fabricante;
    private String cod_barras;
    private Double preco;

    public Produto(String marca, String fabricante, String cod_barras, Double preco) {
        this.setMarca(marca);
        this.setFabricante(fabricante);
        this.setCod_barras(cod_barras);
        this.setPreco(preco);
    }

    public Produto() {
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getFabricante() {
        return fabricante;
    }

    public void setFabricante(String fabricante) {
        this.fabricante = fabricante;
    }

    public String getCod_barras() {
        return cod_barras;
    }

    public void setCod_barras(String cod_barras) {
        this.cod_barras = cod_barras;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public void imprimirDados() {
        System.out.println("Marca: " + this.getMarca());
        System.out.println("Fabricante: " + this.getFabricante());
        System.out.println("Código de Barras: " + this.getCod_barras());
        System.out.println("Preço: " + this.getPreco());
    }
}
