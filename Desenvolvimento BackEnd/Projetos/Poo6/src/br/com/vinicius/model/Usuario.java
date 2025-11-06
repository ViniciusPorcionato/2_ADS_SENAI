package br.com.vinicius.model;

public class Usuario extends Pessoa implements IImprimivel, ISeguranca {
    private String nomeUsuario;
    private String senha;

    public Usuario(String nu,String s) {
        this.setNomeUsuario(nu);
        this.setSenha(s);
    }

    public Usuario() {}

    public String getNomeUsuario() {
        return nomeUsuario;
    }

    public void setNomeUsuario(String nomeUsuario) {
        if (nomeUsuario.length() > 3 && nomeUsuario.length() < 10){
            this.nomeUsuario = nomeUsuario;
        }else{
            System.out.println("Nome de usuário inválido!");
        }
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        if (senha.length() == 8){
            this.senha = senha;
        }else{
            System.out.println("Senha inválida! Não possui 8 caracteres");
        }
    }

    @Override
    public String formatoString() {
        return "Usuário: " + nomeUsuario + nlin +
                "Nome Completo: " + nomeCompleto + nlin +
                "Idade: " + idade + nlin;
    }

    @Override
    public void formatoSystemOut() {
        System.out.println(formatoString());
    }

    @Override
    public boolean validar() {
        return nomeUsuario != null && !nomeUsuario.isEmpty()
                && senha != null && senha.length() >= 4;
    }
}
