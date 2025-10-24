package br.com.vinicius.exercicio.model;

public class Roupa extends Vestuario{
    private String tecido;

    public Roupa(int c, String d, double v, String n, String co,
                 String t, String te) {
        super(c, d, v, n, co, t);
        this.setTecido(te);
        this.imprimirTipoProduto();
    }

    public String getTecido() {
        return tecido;
    }

    public void setTecido(String argTecido) {
        if(argTecido.length() > 1 && argTecido.length() < 10){
            this.tecido = argTecido;
        }
        else{
            System.out.println("Tecido inválido");
        }
    }

    public String print(){
        String ret;
        ret = super.print();
        ret =  ret + "\nTecido: " + this.tecido;
        return ret;
    }

    @Override
    public void imprimirTipoProduto() {
        System.out.println("Roupa");
    }
}
