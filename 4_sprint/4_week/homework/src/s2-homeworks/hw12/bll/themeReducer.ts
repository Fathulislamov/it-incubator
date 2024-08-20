const initState = {
  themeId: 1,
}

export type StateType = {
  themeId: number
}
export const themeReducer = (state = initState, action: any): StateType => { // fix any
  switch (action.type) {
    // дописать
    case 'theme/SET_THEME_ID':
      return { ...state, themeId: action.id }

    default:
      return state
  }
}

export const changeThemeId = (id: number): ChangeThemeIdType => ({ type: 'theme/SET_THEME_ID', id }) as const// fix any
export type ChangeThemeIdType = {
  type: 'theme/SET_THEME_ID'
  id: number
} 
