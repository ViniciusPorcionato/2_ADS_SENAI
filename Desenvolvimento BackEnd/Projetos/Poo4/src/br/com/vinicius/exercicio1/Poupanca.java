package br.com.vinicius.exercicio1;

import java.time.LocalDate;

public class Poupanca extends Conta {

    private int aniversario;

    public Poupanca(String banco, int agencia, int conta, int aniversario) {
        super(banco, agencia, conta);
        this.aniversario = aniversario;
    }

    public int getAniversario() {
        return aniversario;
    }

    public void setAniversario(int aniversario) {
        if (aniversario >= 1 && aniversario <= 30){
            this.aniversario = aniversario;
        }else{
            System.out.println("Amiversário inválido ");
        }
    }

    public String toString(){
        return super.toString() + "\nAniversário: " + this.aniversario;
    }
}
