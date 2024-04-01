import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StarCountdownButton,
  TaskInpult,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInpult
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para seu projeto"
          />

          <datalist id="task-suggestions">
            <option value="React" />
            <option value="Next.js" />
            <option value="Gatsby" />
          </datalist>

          <label htmlFor="minutesAmount">Vou trabalhar em</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={1}
            min={5}
            max={60}
          />

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
