import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { NotFoundPage } from './Pages/NotFoundPage';

import logoImage from './assets/logo.png';
import styles from './scss/HomePage.module.scss';

import { TauEmpire } from './Fractions/TauEmpire/TauEmpire';
import { Orks } from './Fractions/Orks/Orks';
import { Necrons } from './Fractions/Necrons/Nercons';

import { TauXV95GhostkeelBattlesuit } from './Fractions/TauEmpire/TauEmpireArmy/Tau XV95 Ghostkeel Battlesuit';
import { FireWarriors } from './Fractions/TauEmpire/TauEmpireArmy/Fire Warriors';

const App = () => {
  return (
    <div>
      <header className={styles.header}>
        <img src={logoImage} alt="logo" className={styles.logo} />
      </header>

      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='TauEmpire' element={<TauEmpire />} />
        <Route path='Orks' element={<Orks />} />
        <Route path='Necrons' element={<Necrons />} />

        <Route path='TauXV95GhostkeelBattlesuit' element={<TauXV95GhostkeelBattlesuit />} />
        <Route path='FireWarriors' element={<FireWarriors />} />









        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App