function enviarParaWhatsapp(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // CORREÇÃO 1: Uso de crase (`) para permitir variáveis dentro do texto
    const texto = `Olá! Me chamo ${nome}. Meu email é ${email}. Minha mensagem: ${mensagem}`;

    const telefone = "5561981227067";

    
    const linkzap = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

    
    window.open(linkzap, '_blank');
}