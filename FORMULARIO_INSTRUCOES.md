# Configuração do Formulário de Contato

O formulário de contato está configurado para enviar emails para **pestalozi19@outlook.com**.

## Opção 1: Formspree (Recomendado - Mais Simples)

1. Acesse https://formspree.io/
2. Crie uma conta gratuita
3. Crie um novo formulário
4. Copie o endpoint fornecido (formato: https://formspree.io/f/xxxxx)
5. Substitua `xvwnqjdk` no arquivo `index.html` pelo seu endpoint

**Vantagens:**
- Gratuito até 50 envios/mês
- Não requer servidor
- Fácil de configurar
- Proteção contra spam

## Opção 2: EmailJS (Alternativa)

1. Acesse https://www.emailjs.com/
2. Crie uma conta gratuita
3. Configure um serviço de email (Gmail, Outlook, etc.)
4. Crie um template de email
5. Obtenha sua Public Key
6. Atualize o código JavaScript com suas credenciais

## Opção 3: Backend Próprio

Se você tiver um servidor, pode criar um endpoint PHP, Node.js ou Python para processar o formulário.

---

**Nota:** Atualmente o formulário está configurado com um endpoint de exemplo do Formspree. Você precisa criar sua própria conta e configurar o endpoint correto para que os emails sejam enviados.

