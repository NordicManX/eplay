import ProductsList from '../../components/ProductsList'
import Banner from '../../components/Banner'
import Loader from '../../components/Loader'

// A importação do featuredGame foi removida daqui
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  // A busca pelo featuredGame foi removida daqui
  const {
    data: onSaleGames,
    isLoading: isLoadingSale,
    isError: isErrorSale
  } = useGetOnSaleQuery()
  const {
    data: soonGames,
    isLoading: isLoadingSoon,
    isError: isErrorSoon
  } = useGetSoonQuery()

  if (isLoadingSale || isLoadingSoon) {
    return <Loader />
  }

  if (isErrorSale || isErrorSoon) {
    return (
      <h4 style={{ textAlign: 'center', margin: '64px' }}>
        Ocorreu um erro ao buscar os jogos. Por favor, tente novamente mais
        tarde.
      </h4>
    )
  }

  if (onSaleGames && soonGames) {
    return (
      <>
        {/* O Banner agora é chamado sem props, pois ele é autossuficiente */}
        <Banner />
        <ProductsList
          games={onSaleGames}
          title="Promoções"
          background="gray"
          id="on-sale"
          isLoading={false}
        />
        <ProductsList
          games={soonGames}
          title="Em breve"
          background="black"
          id="coming-soon"
          isLoading={false}
        />
      </>
    )
  }

  return <h4>Nenhum jogo encontrado.</h4>
}

export default Home
