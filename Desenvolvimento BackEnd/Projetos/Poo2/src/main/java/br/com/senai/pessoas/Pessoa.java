package br.com.senai.pessoas;


public class Pessoa {

    String nome;
    int idade;
    double salario;
    double vendas;

    public void atualizaRenda(double argsRenda) {
        double rendaAtualizada = argsRenda + ((argsRenda * 10) / 100);
        System.out.println("Renda atualizada é " + rendaAtualizada);
    }

    public void bonificar() {
        if (this.salario <= 1000) {
            this.salario += 100;
        }
    }

    double calcularComissao() {
        if (this.vendas < 2000) {
            return 0;
        } else if (this.vendas <= 3000) {
            return (this.vendas * 5) / 100;
        } else if (this.vendas <= 4000) {
            return (this.vendas * 7) / 100;
        } else if (this.vendas <= 5000) {
            return (this.vendas * 9) / 100;
        }else{
            return (this.vendas * 12) / 100;
        }
    }

    @Override
    public String toString() {
        return "nome=" + nome + ", idade=" + idade + ", salario=" + salario + ", vendas=" + vendas;
    }

}
