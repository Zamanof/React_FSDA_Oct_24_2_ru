/**
 * ТОЧКА ВХОДА ПРИЛОЖЕНИЯ - TypeScript + Vite версия
 *
 * Здесь мы:
 * 1. Импортируем React и ReactDOM
 * 2. Импортируем Provider из react-redux
 * 3. Импортируем наш store
 * 4. Импортируем главный компонент
 * 5. Оборачиваем приложение в Provider, чтобы все компоненты имели доступ к store
 *
 * В Vite используется main.tsx вместо index.js
 * Импорты CSS работают напрямую без дополнительных настроек
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';

import './index.css';
import App from "./App.tsx";

// Получаем корневой элемент из HTML
const rootElement = document.getElementById('root');

// Проверяем, что элемент существует (TypeScript требует проверку)
if (!rootElement) {
    throw new Error('Root element not found');
}

// Создаем root и рендерим приложение
const root = ReactDOM.createRoot(rootElement);

// Рендерим приложение
// Provider оборачивает все приложение и передает store через контекст
// Теперь любой компонент может использовать useSelector и useDispatch
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
