import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { NotFoundPage } from './Pages/NotFoundPage';

import logoImage from './assets/logo.png';
import styles from './scss/HomePage.module.scss';

import home from './assets/icons/Home.png';

import { TauEmpire } from './Fractions/TauEmpire/TauEmpire';
import { Orks } from './Fractions/Orks/Orks';
import { Necrons } from './Fractions/Necrons/Nercons';

import { TauXV95GhostkeelBattlesuit } from './Fractions/TauEmpire/TauEmpireArmy/Tau XV95 Ghostkeel Battlesuit';
import { FireWarriors } from './Fractions/TauEmpire/TauEmpireArmy/Fire Warriors';
import { CrisisBattlesuits } from './Fractions/TauEmpire/TauEmpireArmy/Crisis Battlesuits';
import { Etheral } from './Fractions/TauEmpire/TauEmpireArmy/Etheral';
import { DS8TacticalSupportTurret } from './Fractions/TauEmpire/TauEmpireArmy/DS8 Tactical Support Turret';

const App = () => {
  return (
    <div>
      <header className={styles.header}>
        <a href="/HomePage"><img src={home} alt="home" className={styles.home} /></a>
        <img src={logoImage} alt="logo" className={styles.logo} />
      </header>

      <Routes>
      <Route path='/' element={<HomePage />} />
        <Route path='HomePage' element={<HomePage />} />

        <Route path='TauEmpire' element={<TauEmpire />} />
        <Route path='Orks' element={<Orks />} />
        <Route path='Necrons' element={<Necrons />} />

        <Route path='TauXV95GhostkeelBattlesuit' element={<TauXV95GhostkeelBattlesuit />} />
        <Route path='FireWarriors' element={<FireWarriors />} />
        <Route path='CrisisBattlesuits' element={<CrisisBattlesuits />} />
        <Route path='Etheral' element={<Etheral />} />
        <Route path='DS8TacticalSupportTurret' element={<DS8TacticalSupportTurret />} />








        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App