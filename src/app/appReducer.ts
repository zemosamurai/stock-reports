const initialState = {
  loading: false,
  error: '' as string | null
};

export const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state,  error: action.payload };
    default:
      return state;
  }
};

export const setLoadingAC = (isLoading: boolean) => ({type: 'SET_LOADING', payload: isLoading} as const);
export const setErrorAC = (error: string | null) => ({type: 'SET_ERROR', payload: error} as const);

export type InitialStateType = typeof initialState
type ActionsType =
  | ReturnType<typeof setLoadingAC>
  | ReturnType<typeof setErrorAC>