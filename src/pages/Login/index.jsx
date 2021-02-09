import React, { useState } from 'react'

import {} from 'mdc-react'

import { actions } from 'store'

import { loginUser } from 'api'

function LoginPage({ histore }) {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        actions.loginUser(login, password)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Войти</button>
            </form>
        </div>
    )
}

export default LoginPage
