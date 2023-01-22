import React from "react";

import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { LayOut } from './Pages/LayOut';
import { Profile } from './Pages/Profile';
import { NotFoundPage } from './Pages/NotFoundPage';

import { RegistrationPage } from './Pages/RegistrationPage';
import { LoginPage } from './Pages/LoginPage';

import { TauEmpire } from './Fractions/TauEmpire/TauEmpire';
import { AstraMilitarum } from './Fractions/AstraMilitarum/AstraMilitarum';
import { Necrons } from './Fractions/Necrons/Nercons';

import { TauXV95GhostkeelBattlesuit } from './Fractions/TauEmpire/TauEmpireArmy/Tau XV95 Ghostkeel Battlesuit';
import { FireWarriors } from './Fractions/TauEmpire/TauEmpireArmy/Fire Warriors';
import { CrisisBattlesuits } from './Fractions/TauEmpire/TauEmpireArmy/Crisis Battlesuits';
import { Etheral } from './Fractions/TauEmpire/TauEmpireArmy/Etheral';
import { DS8TacticalSupportTurret } from './Fractions/TauEmpire/TauEmpireArmy/DS8 Tactical Support Turret';
import { GunDrone } from './Fractions/TauEmpire/TauEmpireArmy/Gun Drone';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LayOut />}>
        <Route path='/' element={<HomePage />} />

        <Route path='RegistrationPage' element={<RegistrationPage />} />
        <Route path='LoginPage' element={<LoginPage />} />
        <Route path='Profile' element={<Profile />} />

        <Route path='TauEmpire' element={<TauEmpire />} />
        <Route path='AstraMilitarum' element={<AstraMilitarum />} />
        <Route path='Necrons' element={<Necrons />} />

        <Route path='TauXV95GhostkeelBattlesuit' element={<TauXV95GhostkeelBattlesuit />} />
        <Route path='FireWarriors' element={<FireWarriors />} />
        <Route path='CrisisBattlesuits' element={<CrisisBattlesuits />} />
        <Route path='Etheral' element={<Etheral />} />
        <Route path='DS8TacticalSupportTurret' element={<DS8TacticalSupportTurret />} />
        <Route path='GunDrone' element={<GunDrone />} />

        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App