package br.com.vinicius.exercicio.model;

public abstract class Produto {
    private int codigo;
    private String descricao;
    private double valor;

    public Produto(int c, String d, double v) {
        this.setCodigo(c);
        this.setDescricao(d);
        this.setValor(v);
    }

    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int argCod) {
        //aceitar apenas códigos entre 1 e 100000
        if(argCod > 0 && argCod <= 100000){
            this.codigo = argCod;
        }
        else{
            System.out.println("Código Inválido");
        }
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String argDesc) {
        //aceitar apenas produtos com nome entre 3 e 10 caracteres
        if(argDesc.length() >= 3 && argDesc.length() <= 10){
            this.descricao = argDesc;
        }
        else{
            System.out.println("Descrição inválida");
        }
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double argVlr) {
        //aceitar apenas produtos com valores positivos.
        if(argVlr > 0){
            this.valor = argVlr;
        }
        else{
            System.out.println("Valor inválido");
        }
    }

    public String print(){
        String ret;
        ret =   "Código: " + this.codigo +
                "\nDescrição: " + this.descricao +
                "\nValor: " + this.valor;
        return ret;
    }

    public abstract void imprimirTipoProduto();
}
