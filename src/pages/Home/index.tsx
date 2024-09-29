import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StarCountdownButton,
  TaskInpult,
} from './styles'

const newCycleFormValilidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValilidationSchema>

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValilidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateNewCircle(data: NewCycleFormData) {
    console.log(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCircle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInpult
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para seu projeto"
            {...register('task')}
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
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>00</span>
          <Separator>:</Separator>
          <span>00</span>
        </CountdownContainer>

        <StarCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StarCountdownButton>
      </form>
    </HomeContainer>
  )
}
