package Exercicio1;

public class Livro {
    private String  titulo;
    private String autor;
    private int paginas;
    private int paginasLidas;
    private Boolean emprestado;

    public Livro(String titulo, String autor, int pagina) {
        this.setTitulo(titulo);
        this.setAutor(autor);
        this.setPaginas(pagina);
        this.setEmprestado(false);
        this.setPaginasLidas(0);
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public int getPaginas() {
        return paginas;
    }

    public void setPaginas(int paginas) {
        this.paginas = paginas;
    }

    public int getPaginasLidas() {
        return paginasLidas;
    }

    public void setPaginasLidas(int paginasLidas) {
        this.paginasLidas = paginasLidas;
    }

    public Boolean getEmprestado() {
        return emprestado;
    }

    public void setEmprestado(Boolean emprestado) {
        this.emprestado = emprestado;
    }

    public void ler(int qtd) {
        if (getEmprestado() == null || !getEmprestado()) {
            System.out.println("Não é possível ler este livro, pois ele não está emprestado.");
            return;
        }

        if (this.getPaginasLidas() + qtd > this.getPaginas()) {
            setPaginasLidas(getPaginas()); // Corrigido: antes estava setPaginas()
        } else {
            setPaginasLidas(getPaginasLidas() + qtd);
        }
    }

    public double verProgresso() {
        return (getPaginasLidas() * 100.0) / getPaginas();
    }

    public boolean emprestar() {
        if (!getEmprestado()) {
            setEmprestado(true);
            return true;
        }
        return false;
    }

    public void devolver() {
        setEmprestado(false);
    }

    public void exibirInformacoes(){
        System.out.println("----- Informações sobre o Livro -----");
        System.out.println("Titulo do livro: " + this.getTitulo());
        System.out.println("Autor: " + this.getAutor());
        System.out.println("Número de páginas: " + this.getPaginas());
        System.out.println("Número de páginas lidas: " + this.getPaginasLidas());
        System.out.println("Status: " + (this.getEmprestado() ? "Emprestado" : "Disponível"));
    }
}
