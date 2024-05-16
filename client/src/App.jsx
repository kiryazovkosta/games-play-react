import { Routes, Route } from 'react-router-dom';

import Header from "./components/header/Header"
import Home from "./components/home/Home";
import GameList from './components/game-list/GameList';
import GameCreate from './components/game-create/GameCreate';
import Login from './components/login/Login';
import Register from './components/register/Register';

import { Paths } from './utils/Paths';

function App() {
    return (
        <div id="box">
            <Header />

            <Routes>
                <Route path={Paths.root} element={<Home />} />
                <Route path={Paths.games} element={<GameList />} />
                <Route path={Paths.gameCreate} element={<GameCreate />} />
                <Route path={Paths.login} element={<Login />} />
                <Route path={Paths.register} element={<Register />} />
            </Routes>
        </div>
    );
}

export default App
