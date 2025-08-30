import { parseToBrl } from '../../utils'
import Loader from '../Loader'
import Product from '../Product'
import * as S from './styles'
import { Game } from '../../types'
// É importante que o seu tipo 'Game' também esteja atualizado
// para refletir a nova estrutura de dados da API.
// Exemplo:
// type Game = {
//   id: number
//   name: string // era 'title'
//   description: string
//   release_date: string
//   prices: { ... }
//   details: {
//     category: string // era 'game.category'
//     system: string   // era 'game.system'
//     ...
//   }
//   media: { ... }
// }

export type Props = {
  title: string
  background: 'gray' | 'black'
  games?: Game[]
  id?: string
  isLoading: boolean
}

const ProductsList = ({ background, title, games, id, isLoading }: Props) => {
  // Esta função já parece estar correta para a nova estrutura
  const getGameTags = (game: Game) => {
    const tags = []

    const getGameTags = (game: Game) => {
      const tags = []

      if (game.release_date) {
        // --- LINHA CORRIGIDA ---
        // Transforma a data '2020-10-27T00:00:00.000Z' em '27/10/2020'
        const dataFormatada = new Date(game.release_date).toLocaleDateString(
          'pt-BR'
        )
        tags.push(dataFormatada)
      }

      if (game.prices.discount) {
        tags.push(`${game.prices.discount}%`)
      }

      if (game.prices.current) {
        tags.push(parseToBrl(game.prices.current))
      }
      return tags
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(parseToBrl(game.prices.current))
    }
    return tags
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <S.Container id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <S.List>
          {games &&
            games.map((game) => (
              <li key={game.id}>
                <Product
                  id={game.id}
                  category={game.details.category} // ANTES: game.category
                  description={game.description}
                  image={game.media.thumbnail}
                  infos={getGameTags(game)}
                  system={game.details.system} // ANTES: game.system
                  title={game.name} // ANTES: game.title
                />
              </li>
            ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductsList
