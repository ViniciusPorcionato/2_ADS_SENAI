package br.com.vinicius.exercicio.model;

public class Calcado extends Vestuario implements ISeguranca{
    private String materialSola;
    private String materialParteSuperior;
    private String materialInterno;

    public Calcado(int c, String d, double v, String n, String co,
                   String t, String ms, String mps, String mi) {
        super(c, d, v, n, co, t);
        this.setMaterialSola(ms);
        this.setMaterialParteSuperior(mps);
        this.setMaterialInterno(mi);
        this.imprimirTipoProduto();
        this.imprimirMensagemSeguranca();
    }

    public String getMaterialSola() {
        return materialSola;
    }

    public void setMaterialSola(String argMs) {
        if(argMs.length() > 1 && argMs.length() < 10){
            this.materialSola = argMs;
        }
        else{
            System.out.println("Material da Sola inválido");
        }
    }

    public String getMaterialParteSuperior() {
        return materialParteSuperior;
    }

    public void setMaterialParteSuperior(String argMps) {
        if(argMps.length() > 1 && argMps.length() < 10){
            this.materialParteSuperior = argMps;
        }
        else{
            System.out.println("Material da Parte Superior inválido");
        }
    }

    public String getMaterialInterno() {
        return materialInterno;
    }

    public void setMaterialInterno(String argMi) {
        if(argMi.length() > 1 && argMi.length() < 10){
            this.materialInterno = argMi;
        }
        else{
            System.out.println("Material Interno inválido");
        }
    }

    public String print(){
        String ret;
        ret = super.print();
        ret =  ret + "\nMaterial da Sola: " + this.materialSola +
                "\nMaterial Parte Superior: " + this.materialParteSuperior +
                "\nMaterial Interno: " + this.materialInterno;
        return ret;
    }

    @Override
    public void imprimirTipoProduto() {
        System.out.println("Calçado");
    }

    @Override
    public void imprimirMensagemSeguranca() {
        System.out.println("Verificar a numeração para não fazer gato");
    }
}
