import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Store/Store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from './Form/Form'
import Home from './Home/Home'

const Router = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Form />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="*" element={<Form />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default Router