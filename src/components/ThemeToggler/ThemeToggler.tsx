import React, { useState } from 'react'

import styles from './ThemeToggler.module.scss'

import { LOCAL_USER_THEME_KEY } from '../../constants'
import { applyTheme, toggleTheme } from 'utils'

const ThemeToggler: React.FC<{}> = () => {
    const initTheme = localStorage.getItem(LOCAL_USER_THEME_KEY) || 'light'

    const [theme, setTheme] = useState<string>(initTheme)

    const handleThemeToggle = () => {
        const newTheme = toggleTheme()
        setTheme(newTheme)
        applyTheme(newTheme)
    }

    return (
        <div onClick={handleThemeToggle} className={styles.tooltip}>
            <p className={styles.tooltipText}>{theme === 'light' ? 'Change to dark theme' : 'Change to light theme'}</p>
            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                {theme === 'light' ? (
                    <path d="M9 20h6v2H9zm7.906-6.288C17.936 12.506 19 11.259 19 9c0-3.859-3.141-7-7-7S5 5.141 5 9c0 2.285 1.067 3.528 2.101 4.73.358.418.729.851 1.084 1.349.202.291.59 1.737.831 3.096l.146.825h5.675l.147-.824c.243-1.36.633-2.81.834-3.101.353-.503.727-.94 1.088-1.363zm-2.724.213c-.434.617-.796 2.075-1.006 3.075h-2.351c-.209-1.002-.572-2.463-1.011-3.08a20.502 20.502 0 0 0-1.196-1.492C7.644 11.294 7 10.544 7 9c0-2.757 2.243-5 5-5s5 2.243 5 5c0 1.521-.643 2.274-1.615 3.413-.373.438-.796.933-1.203 1.512z" />
                ) : (
                    <path d="M9 20h6v2H9zm3-18C8.141 2 5 5.141 5 9c0 2.285 1.067 3.528 2.101 4.73.358.418.729.851 1.084 1.349.202.291.59 1.737.831 3.096l.146.825h5.675l.147-.824c.243-1.36.633-2.81.834-3.101.353-.503.727-.94 1.088-1.363C17.936 12.506 19 11.259 19 9c0-3.859-3.141-7-7-7zm2.836 6.836C14.836 7.272 13.563 6 12 6V4c2.667 0 4.836 2.169 4.836 4.836h-2z" />
                )}
            </svg>
        </div>
    )
}

export default ThemeToggler
