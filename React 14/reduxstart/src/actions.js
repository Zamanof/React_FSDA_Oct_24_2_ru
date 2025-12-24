export const increment = ()=>({type: 'increment'})
export const decrement = ()=>({type: 'decrement'})
export const random =
    ()=>({
        type: 'random',
        payload: Math.floor(Math.random() * 10)

    })