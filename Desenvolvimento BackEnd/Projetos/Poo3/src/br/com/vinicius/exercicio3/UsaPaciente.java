package br.com.vinicius.exercicio3;

public class UsaPaciente {
    public static void main(String[] args) {
        Paciente p1 = new Paciente();
        p1.setNome("Vinicius Porcionato");
        p1.setRg("55.987.123-2");
        p1.setEndereco("Rua Santo André, 680");
        p1.setTelefone("1199999-9999");
        p1.setDataNascimento("14/08/2005");
        p1.setProfissao("Dev BeckEnd");
        p1.imprimirDados();

        Paciente p2 = new Paciente("Vinicius Porcionato", "55.987.123-2", "Rua Santo André, 680", "1199999-9999", "14/08/2005", "Dev BeckEnd" );
        p2.imprimirDados();
    }
}
