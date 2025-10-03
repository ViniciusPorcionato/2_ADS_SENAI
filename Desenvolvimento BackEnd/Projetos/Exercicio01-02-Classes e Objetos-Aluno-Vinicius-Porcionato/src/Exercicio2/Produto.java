package Exercicio2;

public class Produto {
    private String nome;
    private double preco;
    private int quantidade;

    public Produto(String nome, double preco, int quantidade) {
        this.setNome(nome);
        this.setPreco(preco);
        this.setQuantidade(quantidade);
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public void comprar(int qtd){
        this.setQuantidade(this.getQuantidade() + qtd);
    }

    public void vender(int qtd){
        if (this.getQuantidade() >= qtd){
            this.setQuantidade(this.getQuantidade() - qtd);
        }else{
            System.out.println("Quantidade insulficiente no estoque !");
        }
    }

    public Double calcularValorTotal(){
        return this.getPreco() * this.getQuantidade();
    }

    public Boolean estoqueBaixo(){
        if (this.getQuantidade() < 5){
            return true;
        }
        return false;
    }

    public void exibirInformacoes(){
        System.out.println("Nome Produto: " + this.getNome());
        System.out.println("Quantidade Produto: " + this.getQuantidade());
        System.out.println("Preço Produto: " + this.getPreco());
        System.out.println("Estoque baixo: " + (this.estoqueBaixo() ? "Sim" : "Não"));
    }
}
