package br.com.vinicius.model;

public abstract class Pessoa {
    protected String nomeCompleto;
    protected int idade;

    public Pessoa(String nomeCompleto, int idade) {
        this.setNomeCompleto(nomeCompleto);
        this.setIdade(idade);
    }

    public Pessoa() {
    }

    public String getNomeCompleto() {
        return nomeCompleto;
    }

    public void setNomeCompleto(String nomeCompleto) {
        this.nomeCompleto = nomeCompleto;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }
}
