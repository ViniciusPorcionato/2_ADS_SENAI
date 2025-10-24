package br.com.vinicius.model;

public class Usuario extends Pessoa implements IImprimivel, ISeguranca {
    private String nomeUsuario;
    private String senha;

    public Usuario(String nomeCompleto, int idade, String nomeUsuario, String senha) {
        super(nomeCompleto, idade);
        this.setNomeUsuario(nomeUsuario);
        this.setSenha(senha);
    }

    public Usuario() {}

    public String getNomeUsuario() {
        return nomeUsuario;
    }

    public void setNomeUsuario(String nomeUsuario) {
        this.nomeUsuario = nomeUsuario;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
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
