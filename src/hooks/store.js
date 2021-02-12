import { useContext } from 'react'

import StoreContex from 'context/data'

export default function useStore() {
    const { state, actions } = useContext(StoreContex)

    return {
        state,
        actions,
    }
}
