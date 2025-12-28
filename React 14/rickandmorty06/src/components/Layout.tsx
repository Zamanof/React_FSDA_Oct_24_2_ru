import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import {useAppSelector} from "../store/hooks.ts";
import {selectFavoritesCount} from "../store/slices/favoritesSlice.ts";

const Layout: React.FC = () => {
    const location = useLocation()

    const favoritesCount = useAppSelector(selectFavoritesCount)

    const isActive = (path: string) => {
        return location.pathname === path
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <header className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 p-6 shadow-2xl border-b-2 border-green-500">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <Link to="/" className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 bg-clip-text text-transparent hover:scale-105 transition-transform">
                        Rick & Morty
                    </Link>
                    <nav className="flex gap-3">
                        <Link
                            to="/"
                            className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${
                                isActive('/')
                                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/50'
                                    : 'hover:bg-gray-700 hover:scale-105'
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/characters"
                            className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${
                                isActive('/characters')
                                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/50'
                                    : 'hover:bg-gray-700 hover:scale-105'
                            }`}
                        >
                            Characters
                        </Link>

                        <Link
                            to="/favorites"
                            className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 relative ${
                                isActive('/favorites')
                                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/50'
                                    : 'hover:bg-gray-700 hover:scale-105'
                            }`}
                        >
                            Favorites
                            {
                                favoritesCount> 0 &&(
                                    <span className="absolute -top-2 -right-2
                                    bg-gradient-to-r from-yellow-400 to-yellow-500
                                    text-black text-xs font-bold
                                    rounded-full w-6 h-6
                                    flex items-center justify-center
                                    shadow-lg animate-pulse">
                                        {favoritesCount}
                                    </span>
                                )
                            }
                        </Link>

                        <Link
                            to="/about"
                            className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${
                                isActive('/about')
                                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/50'
                                    : 'hover:bg-gray-700 hover:scale-105'
                            }`}
                        >
                            About
                        </Link>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout