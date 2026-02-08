// Menu Mobile Toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        
        // Anima o ícone do menu
        const spans = menuToggle.querySelectorAll('span');
        if (nav.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth Scroll para links âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Copiar PIX
function copiarPix() {
    const pixValue = 'pestalozi19@outlook.com';
    navigator.clipboard.writeText(pixValue).then(() => {
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = 'Copiado!';
        btn.style.background = '#10b981';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Erro ao copiar:', err);
        alert('Erro ao copiar. Por favor, copie manualmente: ' + pixValue);
    });
}

// Formulário de Contato - Envio via WhatsApp
const contatoForm = document.getElementById('contatoForm');
const formMessage = document.getElementById('formMessage');
const submitBtn = document.getElementById('submitBtn');

if (contatoForm) {
    contatoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Coleta os dados do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const mensagem = document.getElementById('mensagem').value;
        
        // Formata a mensagem para o WhatsApp
        let mensagemWhatsApp = `*Contato - Site Associação Pestalozzi de Arcoverde*\n\n`;
        mensagemWhatsApp += `*Nome:* ${nome}\n`;
        mensagemWhatsApp += `*E-mail:* ${email}\n`;
        if (telefone) {
            mensagemWhatsApp += `*Telefone:* ${telefone}\n`;
        }
        mensagemWhatsApp += `\n*Mensagem:*\n${mensagem}`;
        
        // Número do WhatsApp (87) 99137-1787
        // Formato: 5587991371787 (código do país + DDD + número sem parênteses e espaços)
        const numeroWhatsApp = '5587991371787';
        
        // Codifica a mensagem para URL
        const mensagemEncoded = encodeURIComponent(mensagemWhatsApp);
        
        // Cria o link do WhatsApp
        const whatsappLink = `https://wa.me/${numeroWhatsApp}?text=${mensagemEncoded}`;
        
        // Abre o WhatsApp em nova aba
        window.open(whatsappLink, '_blank');
        
        // Mostra mensagem de sucesso
        formMessage.style.display = 'block';
        formMessage.style.background = '#10b981';
        formMessage.style.color = 'white';
        formMessage.style.padding = '1rem';
        formMessage.style.borderRadius = '8px';
        formMessage.style.marginBottom = '1rem';
        formMessage.textContent = '✓ Redirecionando para o WhatsApp... Se não abrir automaticamente, clique aqui para enviar a mensagem.';
        
        // Adiciona link clicável na mensagem
        formMessage.style.cursor = 'pointer';
        formMessage.onclick = () => window.open(whatsappLink, '_blank');
        
        // Limpa o formulário após 2 segundos
        setTimeout(() => {
            contatoForm.reset();
            formMessage.style.display = 'none';
        }, 5000);
    });
}

// Header fixo com efeito de scroll
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
        header.style.boxShadow = '0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    }
    
    lastScroll = currentScroll;
});

// Animação de entrada para elementos ao fazer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos cards
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.impact-card, .servico-card, .transparencia-card, .galeria-item');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// Adicionar efeito de hover nos cards de impacto
const impactCards = document.querySelectorAll('.impact-card');
impactCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

