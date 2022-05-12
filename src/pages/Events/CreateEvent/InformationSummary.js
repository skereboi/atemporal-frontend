import React from 'react'
import { useStateMachine } from 'little-state-machine'
import { clearAction } from './actions'
import { initialStates } from '../../../hooks/useLittleMachine'
export const InformationSummary = () => {
  const { actions, state } = useStateMachine({ clearAction })
  return (
    <div className='container'>
      <div className="row">
        <div className="col-sm-12">
          {
            JSON.stringify(state.createEvent)
          }
        </div>
      </div>
      <button onClick={() => actions.clearAction({ payload: initialStates.createEvent })}>Clear</button>
    </div>
  )
}
