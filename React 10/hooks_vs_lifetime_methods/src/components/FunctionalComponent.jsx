import React, {useEffect, useState} from "react";

const FunctionalComponent = () => {
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState('Компонент создан')
    const [timer, setTimer] = useState(0)
    const [mounted, setMounted] = useState(false)

    // like componentDidMount -> useEffect({}, [])
    useEffect(() => {
        // console.log("Функциональный Компонент смонтирован")
        setMessage("Компонент смонтирован")
        setMounted(true)
        const IntervalId = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)

        // like componentWillUnmount
        return () => {
            clearInterval(IntervalId)
        }
    }, [])

    // like componentDidUpdate -> useEffect({}, [state1])
    useEffect(() => {
        console.log(`count изменился на ${count}`)
    }, [count])

    // // like componentDidUpdate -> useEffect({})
    useEffect(() => {
        console.log("Every render")
    })

    const handelIncrement=()=>{
        setCount((prev) => prev + 1)
    }
    const handelDecrement=()=>{
        setCount((prev) => prev - 1)
    }
    const handelReset=()=>{
        setCount(0)
    }
    return (
        <div className="component-container class-component">
            <h2>Функциональный компонент</h2>
            <div className="info-section">
                <p>
                    <strong>
                        Состояние:
                    </strong>
                    {message}
                </p>

                <p>
                    <strong>
                        Смонтирован:
                    </strong>
                    {mounted ? " Да" : " Нет"}
                </p>
                <p>
                    <strong>
                        Таймер:
                    </strong>
                    {timer}
                </p>
            </div>
            <div className="counter-section">
                <h3>Счетчик: {count}</h3>
                <div className="button-group">
                    <button onClick={handelDecrement}>-</button>
                    <button onClick={handelReset}>Сброс</button>
                    <button onClick={handelIncrement}>+</button>
                </div>
            </div>

        </div>
    )
}

export default FunctionalComponent;