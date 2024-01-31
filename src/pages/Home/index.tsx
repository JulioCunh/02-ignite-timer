import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  Separator,
  StarCountdownButton,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" />

          <label htmlFor="minutesAmount">Vou trabalhar em</label>
          <input type="number" id="minutesAmount" />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>00</span>
          <Separator>:</Separator>
          <span>00</span>
        </CountdownContainer>

        <StarCountdownButton disabled type="submit">
          <Play size={24} />
          Começar
        </StarCountdownButton>
      </form>
    </HomeContainer>
  )
}
