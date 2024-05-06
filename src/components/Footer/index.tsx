import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <h4>Categorias</h4>
        <S.Links>
          <li>
            <S.Link
              title="clique aqui para acessar jogos de Ação"
              to="/categories#action"
            >
              Ação
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar jogos de Esporte"
              to="/categories#sport"
            >
              Esporte
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar jogos de Luta"
              to="/categories#fight"
            >
              Luta
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar jogos de Simulação"
              to="/categories#simulation"
            >
              Simulação
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar jogos de RPG"
              to="/categories#rpg"
            >
              RPG
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Acesso Rápido</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="clique aqui para acessar a seção de promoções"
              to="/#on-sale"
            >
              Promoções
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar a seção de em breve"
              to="/#coming-soon"
            >
              Em breve
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </S.Container>
)
export default Footer
