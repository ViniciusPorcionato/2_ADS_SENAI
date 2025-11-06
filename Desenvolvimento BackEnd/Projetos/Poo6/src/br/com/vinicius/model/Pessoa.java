package br.com.vinicius.model;

public abstract class Pessoa {

    protected String nomeCompleto;
    protected int idade;

    public Pessoa(String nc, int i) {
        this.setNomeCompleto(nc);
        this.setIdade(i);
    }

    public Pessoa() {
    }

    public String getNomeCompleto() {
        return nomeCompleto;
    }

    public void setNomeCompleto(String nomeCompleto) {
        if (nomeCompleto.length() > 5){
            this.nomeCompleto = nomeCompleto;
        }else{
            System.out.println("Nome inválido!");
        }

    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        if (idade >= 18){
            this.idade = idade;
        }else{
            System.out.println("Idade inválida!");
        }
    }
}
