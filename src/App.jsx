import React from "react";

import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { LayOut } from './Pages/LayOut';
import { NotFoundPage } from './Pages/NotFoundPage';

import { TauEmpire } from './Fractions/TauEmpire/TauEmpire';
import { Orks } from './Fractions/Orks/Orks';
import { Necrons } from './Fractions/Necrons/Nercons';

import { TauXV95GhostkeelBattlesuit } from './Fractions/TauEmpire/TauEmpireArmy/Tau XV95 Ghostkeel Battlesuit';
import { FireWarriors } from './Fractions/TauEmpire/TauEmpireArmy/Fire Warriors';
import { CrisisBattlesuits } from './Fractions/TauEmpire/TauEmpireArmy/Crisis Battlesuits';
import { Etheral } from './Fractions/TauEmpire/TauEmpireArmy/Etheral';
import { DS8TacticalSupportTurret } from './Fractions/TauEmpire/TauEmpireArmy/DS8 Tactical Support Turret';
import { GunDrone } from './Fractions/TauEmpire/TauEmpireArmy/Gun Drone';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LayOut />}>
          <Route path='/' element={<HomePage />} />

          <Route path='TauEmpire' element={<TauEmpire />} />
          <Route path='Orks' element={<Orks />} />
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
    </div>
  )
}

export default App