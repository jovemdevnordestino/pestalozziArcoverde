import { useState } from 'react'
import Logo from './Logo'

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-primary-blue transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('quem-somos')} className="text-gray-700 hover:text-primary-blue transition-colors">
                Quem Somos
              </button>
              <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-primary-blue transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection('transparencia')} className="text-gray-700 hover:text-primary-blue transition-colors">
                Transparência
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-primary-blue transition-colors">
                Contato
              </button>
              <button className="bg-accent-orange hover:bg-accent-orange/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Doar
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-3 pb-4">
              <button onClick={() => scrollToSection('inicio')} className="block w-full text-left text-gray-700 hover:text-primary-blue py-2">
                Início
              </button>
              <button onClick={() => scrollToSection('quem-somos')} className="block w-full text-left text-gray-700 hover:text-primary-blue py-2">
                Quem Somos
              </button>
              <button onClick={() => scrollToSection('servicos')} className="block w-full text-left text-gray-700 hover:text-primary-blue py-2">
                Serviços
              </button>
              <button onClick={() => scrollToSection('transparencia')} className="block w-full text-left text-gray-700 hover:text-primary-blue py-2">
                Transparência
              </button>
              <button onClick={() => scrollToSection('contato')} className="block w-full text-left text-gray-700 hover:text-primary-blue py-2">
                Contato
              </button>
              <button className="w-full bg-accent-orange hover:bg-accent-orange/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Doar
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-primary-blue via-primary-blue-light to-primary-blue-dark text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Logo className="h-24 md:h-32" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transformando vidas com empatia e respeito
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Associação Pestalozzi de Arcoverde: Inclusão e saúde para pessoas neurodivergentes.
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-primary-blue mb-2">130+</h3>
              <p className="text-gray-600 text-lg">Atendimentos Semanais</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-primary-blue mb-2">500+</h3>
              <p className="text-gray-600 text-lg">Atendimentos Mensais</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-primary-blue mb-2">20+</h3>
              <p className="text-gray-600 text-lg">Profissionais Voluntários</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section id="quem-somos" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue text-center mb-8">
            Quem Somos
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            A Associação Pestalozzi de Arcoverde é uma instituição dedicada à inclusão e saúde 
            de pessoas neurodivergentes, oferecendo atendimento especializado e humanizado. 
            Nossa missão é transformar vidas através da empatia, respeito e profissionalismo, 
            garantindo que cada pessoa receba o cuidado e atenção que merece.
          </p>
        </div>
      </section>

      {/* Transparência Section */}
      <section id="transparencia" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue text-center mb-12">
            Transparência
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-block bg-primary-blue/10 rounded-lg px-6 py-3 mb-4">
                <p className="text-sm text-gray-600 mb-1">CNPJ</p>
                <p className="text-2xl font-bold text-primary-blue">11.161.211/0001-22</p>
              </div>
              
              <div className="mt-6 p-4 bg-accent-yellow/20 rounded-lg border-l-4 border-accent-orange">
                <p className="text-lg font-semibold text-gray-800">
                  Reconhecida como Utilidade Pública Municipal pela Lei nº 2.656/2023
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="bg-primary-blue hover:bg-primary-blue-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Baixar Estatuto Social</span>
              </button>
              <button className="bg-white border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Ver Certidões</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue text-center mb-12">
            Nossos Serviços
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              'Fisioterapia',
              'Psicologia',
              'Psicanálise',
              'Fonoaudiologia',
              'Terapia Ocupacional',
              'Musicoterapia',
              'Apoio Pedagógico'
            ].map((servico, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-blue/5 to-primary-blue-light/5 rounded-xl p-6 border border-primary-blue/10 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent-orange rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-blue">{servico}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe Técnica Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue text-center mb-12">
            Equipe Técnica
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { nome: 'Elaine Maria', especialidade: 'Psicanalista' },
              { nome: 'Deise Alves', especialidade: 'Psicanalista' },
              { nome: 'Stephanie Almeida', especialidade: 'Fisioterapeuta' }
            ].map((profissional, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-blue to-primary-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">
                    {profissional.nome.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-primary-blue mb-2">
                  {profissional.nome}
                </h3>
                <p className="text-gray-600">{profissional.especialidade}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-primary-blue-dark text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-800 px-3 py-2 rounded-lg">
                  <Logo className="h-12" />
                </div>
              </div>
              <p className="text-blue-100 mb-4">
                Transformando vidas com empatia e respeito. Inclusão e saúde para pessoas neurodivergentes.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-blue-100">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p>
                    Rua Leonardo José Guimarães, 233<br />
                    Centro, Arcoverde-PE<br />
                    CEP: 56510-180
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; {new Date().getFullYear()} Associação Pestalozzi de Arcoverde. Todos os direitos reservados.</p>
            <p className="mt-2 text-sm">CNPJ: 11.161.211/0001-22</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

