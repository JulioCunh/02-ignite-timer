import { Action } from '@remix-run/router'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
}

export function cyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE: {
      const { newCycle } = action.payload

      return {
        ...state,
        cycles: [...state.cycles, newCycle],
        activeCycleId: newCycle.id,
      }
    }

    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      const { activeCycleId } = action.payload

      return {
        ...state,
        activeCycleId: null,
      }
    }

    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
      const { activeCycleId } = action.payload

      return {
        ...state,
        activeCycleId: null,
      }
    }

    default:
      return state
  }
}
