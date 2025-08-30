import Tag from '../Tag'
import Button from '../Button'
import Loader from '../Loader'

import { useGetFeaturedGameQuery } from '../../services/api'
import { parseToBrl } from '../../utils'

import * as S from './styles'

const Banner = () => {
  // Adicionamos isLoading e isError para um controle mais preciso
  const { data: game, isLoading, isError } = useGetFeaturedGameQuery()

  // O Loader é exibido enquanto os dados estão sendo buscados
  if (isLoading) {
    return <Loader />
  }

  // Se der erro ou o jogo não vier, exibimos uma mensagem
  // (ou poderíamos retornar null para não mostrar nada)
  if (isError || !game) {
    return (
      <h4 style={{ textAlign: 'center', margin: '64px' }}>
        Não foi possível carregar o destaque do dia.
      </h4>
    )
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do Dia</Tag>
        <div>
          <S.Title>{game.name}</S.Title>
          <S.Prices>
            {/* Adicionamos uma verificação para o preço antigo para evitar erros */}
            {game.prices.old && <span>De {parseToBrl(game.prices.old)}</span>}
            {/* Garantimos que o preço atual também seja verificado */}
            {game.prices.current && (
              <b> por apenas {parseToBrl(game.prices.current)}</b>
            )}
          </S.Prices>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </S.Image>
  )
}

export default Banner
