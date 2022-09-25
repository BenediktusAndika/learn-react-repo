import React, { useState } from 'react'

const LearnStateNumber = () => {

    const [value, setValue] = useState(0)

    const counter = (value) => {
     if(value=='+') return setValue((state)=> state+=1)
     return setValue((state)=> state-1 == -1 ? 0 : state-1) 
    }

    return (
        <>
            <div style={{ padding: '15px' }}>
                <button type='button'
                    onClick={() => counter('-')}
                    style={{ marginRight: '5px' }}>-</button>
                {value}
                <button type='button'
                    onClick={() => counter('+')}
                    style={{ marginLeft: '5px' }}>+</button>
            </div>
        </>
    )
}

export default LearnStateNumber