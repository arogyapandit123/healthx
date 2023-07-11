import { SET_BREADCRUMBS, REMOVE_BREADCRUMBS, RESET_BREADCRUMBS } from './BreadcrumbsTypes'

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_BREADCRUMBS: 
      return {
        ...state,
        ...action.payload,
      }
    case REMOVE_BREADCRUMBS:
      return {
        ...state,
        breadcrumbs: {...action.payload}
      }
    case RESET_BREADCRUMBS:
      return {
        ...state,
        breadcrumbs: []
      }
    default:
      return state
  }
}