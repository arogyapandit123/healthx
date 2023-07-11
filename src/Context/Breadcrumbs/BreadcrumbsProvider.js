import React, { createContext, useReducer } from 'react'
import { reducer } from './BreadcrumbsReducer'

const initialState = {
  breadcrumbs: []
}

export const BreadcrumbContext = createContext()

export const VideoContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const set_breadcrumbs = () => {
    dispatch({ 
      type: '', 
      payload: {
        
      },
    })
  }

  const reset_breadcrumbs = () => {
    dispatch({
      type: '',
      payload: {

      },
    })
  }

  const remove_breadcrumb_value = () => {
    dispatch({
      type: '',
      payload: {

      },
    })
  }

  return <BreadcrumbContext.Provider 
    value={{ 
      breadcrumbs: state.breadcrumbs,
      set_breadcrumbs,
      reset_breadcrumbs,
      remove_breadcrumb_value,
    }}>{props.children}</BreadcrumbContext.Provider>
}