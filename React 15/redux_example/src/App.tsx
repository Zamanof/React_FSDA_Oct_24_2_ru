import React, { useState, type ChangeEvent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, reset, setValue} from "./actions/counterActions.ts";
import {toggleTheme} from "./actions/themeActions.ts";
import type {RootState} from "./types";


interface Styles {
    [key: string]: React.CSSProperties;
}

const Counter: React.FC = () => {

    const count = useSelector((state: RootState) => state.counter.count);
    const theme = useSelector((state: RootState) => state.theme.theme);

    const dispatch = useDispatch();

    useEffect(() => {
        document.body.className = theme;
        document.body.style.backgroundColor = theme === 'dark' ? '#1a1a1a' : '#fafafa';
        document.body.style.color = theme === 'dark' ? '#ffffff' : '#000000';
    }, [theme]);

    const [inputValue, setInputValue] = useState<string>('');


    const handleIncrement = (): void => {
        // @ts-ignore
        dispatch(increment());
    };

    const handleDecrement = (): void => {
        // @ts-ignore
        dispatch(decrement());
    };

    const handleReset = (): void => {
        // @ts-ignore
        dispatch(reset());
    };

    const handleSetValue = (): void => {
        const numValue: number = parseInt(inputValue, 10);
        if (!isNaN(numValue)) {
            // @ts-ignore
            dispatch(setValue(numValue));
            setInputValue('');
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value);
    };

    const handleToggleTheme = (): void => {
        // @ts-ignore
        dispatch(toggleTheme());
    };

    // Динамические стили в зависимости от темы
    const getStyles = () => {
        const isDark = theme === 'dark';
        return {
            container: {
                ...styles.container,
                backgroundColor: isDark ? '#2d2d2d' : '#ffffff',
                color: isDark ? '#ffffff' : '#000000'
            },
            title: {
                ...styles.title,
                color: isDark ? '#ffffff' : '#333'
            },
            counterBox: {
                ...styles.counterBox,
                backgroundColor: isDark ? '#1e1e1e' : '#f5f5f5',
                borderColor: isDark ? '#4CAF50' : '#4CAF50'
            },
            counterValue: {
                ...styles.counterValue,
                color: '#4CAF50'
            },
            label: {
                ...styles.label,
                color: isDark ? '#cccccc' : '#666'
            },
            button: {
                ...styles.button,
                backgroundColor: isDark ? '#4CAF50' : '#4CAF50',
                color: 'white'
            },
            input: {
                ...styles.input,
                backgroundColor: isDark ? '#1e1e1e' : '#ffffff',
                borderColor: isDark ? '#555' : '#ddd',
                color: isDark ? '#ffffff' : '#000000'
            },
            explanation: {
                ...styles.explanation,
                backgroundColor: isDark ? '#1e1e1e' : '#e3f2fd',
                color: isDark ? '#ffffff' : '#000000'
            },
            themeButton: {
                ...styles.button,
                position: 'fixed' as const,
                top: '20px',
                right: '20px',
                backgroundColor: isDark ? '#555' : '#333',
                fontSize: '20px',
                padding: '10px 15px',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }
        };
    };

    const dynamicStyles = getStyles();

    return (
        <div style={dynamicStyles.container}>
            <button
                onClick={handleToggleTheme}
                style={dynamicStyles.themeButton}
                title={theme === 'dark' ? 'Переключить на светлую тему' : 'Переключить на темную тему'}
            >
                {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            <h1 style={dynamicStyles.title}>Redux example</h1>

            <div style={dynamicStyles.counterBox}>
                <h2 style={dynamicStyles.counterValue}>{count}</h2>
                <p style={dynamicStyles.label}>Current counter value</p>
            </div>

            <div style={styles.buttonGroup}>
                <button onClick={handleIncrement} style={dynamicStyles.button}>
                    Increment
                </button>
                <button onClick={handleDecrement} style={dynamicStyles.button}>
                    Decrement
                </button>
                <button onClick={handleReset} style={dynamicStyles.button}>
                    Reset
                </button>
            </div>

            <div style={styles.inputGroup}>
                <input
                    type="number"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter number"
                    style={dynamicStyles.input}
                />
                <button onClick={handleSetValue} style={dynamicStyles.button}>
                    Set Value
                </button>
            </div>


        </div>
    );
};

const styles: Styles = {
    container: {
        maxWidth: '600px',
        margin: '50px auto',
        padding: '30px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center'
    },
    title: {
        color: '#333',
        marginBottom: '30px'
    },
    counterBox: {
        backgroundColor: '#f5f5f5',
        padding: '30px',
        borderRadius: '10px',
        marginBottom: '30px',
        border: '2px solid #4CAF50'
    },
    counterValue: {
        fontSize: '48px',
        color: '#4CAF50',
        margin: '10px 0'
    },
    label: {
        color: '#666',
        fontSize: '14px'
    },
    buttonGroup: {
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
        marginBottom: '20px',
        flexWrap: 'wrap'
    },
    button: {
        padding: '12px 24px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s'
    },
    inputGroup: {
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
        marginBottom: '30px',
        alignItems: 'center'
    },
    input: {
        padding: '10px',
        fontSize: '16px',
        border: '2px solid #ddd',
        borderRadius: '5px',
        width: '200px'
    },
    explanation: {
        backgroundColor: '#e3f2fd',
        padding: '20px',
        borderRadius: '5px',
        textAlign: 'left',
        marginTop: '30px'
    },
    list: {
        lineHeight: '1.8'
    },
    tsNote: {
        marginTop: '15px',
        padding: '10px',
        backgroundColor: '#fff3cd',
        borderRadius: '5px',
        color: '#856404'
    }
};

export default Counter;
