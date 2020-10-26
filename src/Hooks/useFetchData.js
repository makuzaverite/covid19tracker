import axios from 'axios'
import { useReducer, useEffect } from 'react'

const BASE_URL = 'https://covid19.mathdro.id/api'

const ACTIONS = {
  MAKE_REQUEST: 'make_request',
  GET_DATA: 'get_data',
  ERROR: 'error',
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, data: {} }
    case ACTIONS.GET_DATA:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: false,
      }
    case ACTIONS.ERROR:
      return { ...state, loading: false, error: action.payload.error, data: {} }
    default:
      return state
  }
}

export default function useFetchData(params, type) {
  const [state, disptch] = useReducer(reducer, {
    data: {},
    loading: true,
    error: false,
  })

  async function searchForAll() {
    disptch({ type: ACTIONS.MAKE_REQUEST })
    try {
      const fetchInfo = await axios.get(BASE_URL)
      disptch({ type: ACTIONS.GET_DATA, payload: { data: fetchInfo.data } })
    } catch (error) {
      disptch({ type: ACTIONS.ERROR, payload: { error } })
    }
  }

  async function searchForCountry(params) {
    disptch({ type: ACTIONS.MAKE_REQUEST })
    try {
      const fetchInfo = await axios.get(
        `https://covid19.mathdro.id/api/countries/${params}`
      )
      disptch({ type: ACTIONS.GET_DATA, payload: { data: fetchInfo.data } })
    } catch (error) {
      disptch({ type: ACTIONS.ERROR, payload: { error } })
    }
  }

  useEffect(() => {
    if (type === 'country') {
      if (params.length <= 0) {
        searchForAll()
      } else {
        searchForCountry(params.toLowerCase())
      }
    } else {
      searchForAll()
    }
  }, [params, type])

  return state
}
