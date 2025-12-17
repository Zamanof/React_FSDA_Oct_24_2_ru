import {Component} from "react";

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            message: "Компонент создан",
            timer: 0,
            mounted: false
        }
    }

    componentDidMount() {
        this.setState({
            message: "Классовый Компонент смонтирован",
            mounted: true
        });

        this.IntervalId = setInterval(() => {
            this.setState((prevState) => ({
                timer: prevState.timer + 1,
            }))
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log("Классовый компонент обновлен")
        if (prevState.count !== this.state.count) {
            console.log(`count изменился с ${prevState.count} на ${this.state.count}`)
        }
    }

    componentWillUnmount() {
        console.log('Классовый Компонент размонтирован')
        if (this.IntervalId){
            clearInterval(this.IntervalId)
        }
    }

    handleDecrement = () => {
        this.setState((prevState) => ({
            count: prevState.count - 1,
        }))
    }
    handleIncrement = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }))
    }
    handleReset = () => {
        this.setState({
            count: 0,
            message: "Счетчик сброшен"
        })
    }

    render() {
        const {count, message, timer, mounted} = this.state;
        return (
            <div className="component-container class-component">
                <h2>Классовый компонент</h2>
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
                        {timer} сек
                    </p>
                </div>
                <div className="counter-section">
                    <h3>Счетчик: {count}</h3>
                    <div className="button-group">
                        <button onClick={this.handleDecrement}>-</button>
                        <button onClick={this.handleReset}>Сброс</button>
                        <button onClick={this.handleIncrement}>+</button>
                    </div>
                </div>
            </div>
        )
    }
}