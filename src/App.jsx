import React from "react";

import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { LayOut } from './Pages/LayOut';
import { Profile } from './Pages/Profile';
import { NotFoundPage } from './Pages/NotFoundPage';

import { RegistrationPage } from './Pages/RegistrationPage';
import { LoginPage } from './Pages/LoginPage';
import { ForgotPasswordPage } from './Pages/ForgotPasswordPage';

import { TauEmpire } from './Fractions/TauEmpire/TauEmpire';
import { AstraMilitarum } from './Fractions/AstraMilitarum/AstraMilitarum';
import { Necrons } from './Fractions/Necrons/Nercons';

import { TauEmpireStrat } from './Fractions/TauEmpire/TauEmpireStrat';
import { GhostkeelBattlesuit } from './Fractions/TauEmpire/TauEmpireArmy/Ghostkeel Battlesuit';
import { FireWarriors } from './Fractions/TauEmpire/TauEmpireArmy/Fire Warriors';
import { CrisisBattlesuits } from './Fractions/TauEmpire/TauEmpireArmy/Crisis Battlesuits';
import { Etheral } from './Fractions/TauEmpire/TauEmpireArmy/Etheral';
import { SupportTurret } from './Fractions/TauEmpire/TauEmpireArmy/Support Turret';
import { Drones } from './Fractions/TauEmpire/TauEmpireArmy/Drones';
import { CadreFireblade } from './Fractions/TauEmpire/TauEmpireArmy/Cadre Fireblade';
import { RiptideBattlesuit } from './Fractions/TauEmpire/TauEmpireArmy/Riptide Battlesuit';
import { Stormsurge } from './Fractions/TauEmpire/TauEmpireArmy/Stormsurge';
import { BroadsideBattlesuits } from './Fractions/TauEmpire/TauEmpireArmy/Broadside Battlesuits';

import { ShockTrooper } from './Fractions/AstraMilitarum/AstraMilitarumArmy/ShockTrooper';
import { LordSolarLeontus } from './Fractions/AstraMilitarum/AstraMilitarumArmy/LordSolarLeontus';
import { UrsulaCreed } from './Fractions/AstraMilitarum/AstraMilitarumArmy/UrsulaCreed';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LayOut />}>
        <Route path='/' element={<HomePage />} />

        <Route path='RegistrationPage' element={<RegistrationPage />} />
        <Route path='LoginPage' element={<LoginPage />} />
        <Route path='Profile' element={<Profile />} />
        <Route path='ForgotPasswordPage' element={<ForgotPasswordPage />} />

        <Route path='TauEmpire' element={<TauEmpire />} />
        <Route path='AstraMilitarum' element={<AstraMilitarum />} />
        <Route path='Necrons' element={<Necrons />} />

        <Route path='TauEmpireStrat' element={<TauEmpireStrat />} />
        <Route path='GhostkeelBattlesuit' element={<GhostkeelBattlesuit />} />
        <Route path='FireWarriors' element={<FireWarriors />} />
        <Route path='CrisisBattlesuits' element={<CrisisBattlesuits />} />
        <Route path='Etheral' element={<Etheral />} />
        <Route path='SupportTurret' element={<SupportTurret />} />
        <Route path='Drones' element={<Drones />} />
        <Route path='CadreFireblade' element={<CadreFireblade />} />
        <Route path='RiptideBattlesuit' element={<RiptideBattlesuit />} />
        <Route path='Stormsurge' element={<Stormsurge />} />
        <Route path='BroadsideBattlesuits' element={<BroadsideBattlesuits />} />

        <Route path='ShockTrooper' element={<ShockTrooper />} />
        <Route path='LordSolarLeontus' element={<LordSolarLeontus />} />
        <Route path='UrsulaCreed' element={<UrsulaCreed />} />

        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App