import ProductsList from '../../components/ProductsList'
import Banner from '../../components/Banner'
import Loader from '../../components/Loader'

// 1. Importamos os flags 'isError' para saber se o pedido falhou
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  // 2. Extraímos os flags 'isError' juntamente com os outros estados
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

  // 3. Verificamos o estado de carregamento primeiro
  if (isLoadingSale || isLoadingSoon) {
    return <Loader />
  }

  // 4. Se algum dos pedidos der erro, mostramos uma mensagem clara
  if (isErrorSale || isErrorSoon) {
    return (
      <h4 style={{ textAlign: 'center', margin: '64px' }}>
        Ocorreu um erro ao buscar os jogos. Por favor, tente novamente mais
        tarde.
      </h4>
    )
  }

  // 5. Só renderizamos as listas se tivermos a certeza de que os dados chegaram
  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductsList
          games={onSaleGames}
          title="Promoções"
          background="gray"
          id="on-sale"
          isLoading={false} // O carregamento já é tratado nesta página
        />
        <ProductsList
          games={soonGames}
          title="Em breve"
          background="black"
          id="coming-soon"
          isLoading={false} // O carregamento já é tratado nesta página
        />
      </>
    )
  }

  // Este é um caso de segurança, se os dados não vierem por algum motivo
  return <h4>Nenhum jogo encontrado.</h4>
}

export default Home
