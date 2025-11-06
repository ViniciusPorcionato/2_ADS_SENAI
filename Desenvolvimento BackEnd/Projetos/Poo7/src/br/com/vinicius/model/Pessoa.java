package br.com.vinicius.model;

public abstract class Pessoa {
    private String nome;
    private String email;

    public Pessoa() {}

    public Pessoa(String nome, String email) {
        setNome(nome);
        setEmail(email);
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        if (nome == null || nome.isBlank()) {
            System.out.println("Nome não pode ser nulo ou vazio.");
        }
        String[] partes = nome.trim().split(" ");
        partes[0] = partes[0].substring(0, 1).toUpperCase() + partes[0].substring(1).toLowerCase();
        this.nome = String.join(" ", partes);
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        if (email == null || !email.contains("@")) {
            System.out.println("Email inválido.");
        }
        this.email = email;
    }

    public abstract String getTipo();
}
