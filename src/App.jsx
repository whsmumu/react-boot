import HeaderNavbar from './components/HeaderNavbar.jsx';
import NewsCarousel from './components/NewsCarousel.jsx';
import SalaryTable from './components/SalaryTable.jsx';

const noticias = [
  {
    id: 1,
    titulo: 'Campanha Salarial 2026/2027',
    descricao: 'Assembleia geral define a pauta de reajuste da categoria de TI.',
    imagem: '/img/slide1.svg',
    link: '#pisos',
  },
  {
    id: 2,
    titulo: 'Novos Conveniados de TI',
    descricao: 'Cursos, certificações e coworkings com desconto para sócios.',
    imagem: '/img/slide2.svg',
    link: '#noticias',
  },
  {
    id: 3,
    titulo: 'Clube de Benefícios',
    descricao: 'Saúde, lazer e educação para profissionais de TI da Bahia.',
    imagem: '/img/slide3.svg',
    link: '#noticias',
  },
];

const cargos = [
  { id: 1, cargo: 'Desenvolvedor Júnior', piso: 3800, reajuste: 6.5, cargaHoraria: '40h semanais', descricao: 'Desenvolve e mantém sistemas sob supervisão.' },
  { id: 2, cargo: 'Desenvolvedor Pleno', piso: 6200, reajuste: 6.0, cargaHoraria: '40h semanais', descricao: 'Desenvolve funcionalidades com autonomia e revisa código.' },
  { id: 3, cargo: 'Desenvolvedor Sênior', piso: 9500, reajuste: 5.5, cargaHoraria: '40h semanais', descricao: 'Define a arquitetura e orienta a equipe técnica.' },
  { id: 4, cargo: 'Analista de Suporte', piso: 3200, reajuste: 7.0, cargaHoraria: '44h semanais (escala)', descricao: 'Atende usuários, configura equipamentos e redes.' },
  { id: 5, cargo: 'DBA', piso: 8000, reajuste: 5.8, cargaHoraria: '40h semanais + sobreaviso', descricao: 'Administra, otimiza e protege os bancos de dados.' },
  { id: 6, cargo: 'DevOps', piso: 8700, reajuste: 5.8, cargaHoraria: '40h semanais + sobreaviso', descricao: 'Automatiza implantações e mantém a infraestrutura em nuvem.' },
  { id: 7, cargo: 'Analista de Dados', piso: 6800, reajuste: 6.0, cargaHoraria: '40h semanais', descricao: 'Coleta, trata e analisa dados para apoiar decisões.' },
];

export default function App() {
  return (
    <>
      <HeaderNavbar />

      <main>
        <section id="noticias" className="bg-dark py-4">
          <div className="container">
            <NewsCarousel noticias={noticias} />
          </div>
        </section>

        <section id="pisos" className="container py-5">
          <h2 className="fw-bold mb-1">Pisos Salariais 2026</h2>
          <p className="text-secondary mb-4">Valores fictícios para fins acadêmicos.</p>
          <SalaryTable cargos={cargos} />
        </section>
      </main>

      <footer className="bg-primary text-white text-center py-3">
        SINDADOS-BA · Sindicato dos Trabalhadores de TI da Bahia
      </footer>
    </>
  );
}