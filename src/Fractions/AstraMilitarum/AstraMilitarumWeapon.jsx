import { WeaponBlock, WeaponBlockBlue } from '../../Components/WeaponBlock';

export const Bolt_pistol = () => {
    return (<WeaponBlock title='Bolt pistol'
        R='12"' Type='Ps' Type_num='4' S='4' AP='0' D='1' />
    )
}

export const Laspistol = () => {
    return (<WeaponBlock title='Laspistol'
        R='12"' Type='Ps' Type_num='1' S='3' AP='0' D='1' />
    )
}

export const Drum_fed_autogun = () => {
    return (<WeaponBlock title='Drum-fed auto'
        R='24"' Type='Rf' Type_num='2' S='3' AP='0' D='1' />
    )
}

export const Flamer = () => {
    return (<WeaponBlock title='Flamer'
        R='12"' Type='As' Type_num='D6' S='4' AP='0' D='1'
        Text='*Атака автоматически попадает в цель.' />
    )
}

export const Frag_grenade = () => {
    return (<WeaponBlockBlue title='Frag grenade'
        R='24"' Type='As' Type_num='D6' S='3' AP='0' D='1'
        Text='*Атака автоматически попадает в цель.' />
    )
}

export const Krak_grenade = () => {
    return (<WeaponBlockBlue title='Krak grenade'
        R='24"' Type='As' Type_num='1' S='6' AP='-1' D='D3'
        Text='*Атака автоматически попадает в цель.' />
    )
}

export const Lasgun = () => {
    return (<WeaponBlock title='Lasgun'
        R='24"' Type='Rf' Type_num='1' S='3' AP='0' D='1' />
    )
}

export const Meltagun = () => {
    return (<WeaponBlock title='Meltagun'
        R='12"' Type='As' Type_num='1' S='8' AP='-4' D='D6'
        Text='*Если атака в половине дистанции, урон D6+2.' />
    )
}

export const Plasma_gun_S = () => {
    return (<WeaponBlockBlue title='Plasma gun S'
        R='24"' Type='Rf' Type_num='1' S='7' AP='-3' D='1'
        Text='*Если выпала 1 на попадание, владелец уничтожается.' />
    )
}

export const Plasma_gun_SС = () => {
    return (<WeaponBlockBlue title='Plasma gun SС'
        R='24"' Type='Rf' Type_num='1' S='8' AP='-3' D='2'
        Text='*Если выпала 1 на попадание, владелец уничтожается.' />
    )
}

export const Chainsword = () => {
    return (<WeaponBlock title='Chainsword'
        R='-' Type='Ml' Type_num='1' S='-' AP='0' D='1'
        Text='*Дополнительная атака этим оружием.' />
    )
}

export const Frag_grenades = () => {
    return (<WeaponBlock title='Frag grenades'
        R='6"' Type='Gr' Type_num='D6' S='3' AP='0' D='1' />
    )
}

export const Sols_Righteous_Gaze = () => {
    return (<WeaponBlock title='Sol’s Gaze'
        R='12"' Type='Ps' Type_num='2' S='8' AP='-3' D='3' />
    )
}

export const Conquest = () => {
    return (<WeaponBlock title='Conquest'
        R='-' Type='Ml' Type_num='-' S='-' AP='-3' D='2' />
    )
}

export const Duty_and_Vengeance = () => {
    return (<WeaponBlock title='Duty & Vengeance'
        R='12"' Type='Ps' Type_num='4' S='5' AP='-3' D='2' />
    )
}

export const Power_sword = () => {
    return (<WeaponBlock title='Power sword'
        R='-' Type='Ml' Type_num='-' S='+1' AP='-3' D='1' />
    )
}

export const Demolisher_battle_cannon = () => {
    return (<WeaponBlock title='Demolisher battle'
        R='24"' Type='Hv' Type_num='D6' S='10' AP='-3' D='D3+3' />
    )
}

export const Eradicator_nova_cannon = () => {
    return (<WeaponBlock title='Eradicator nova'
        R='36"' Type='Hv' Type_num='D3+6' S='6' AP='-2' D='2'
        Text='*Цель не получает преимуществ легкого прикрытия.' />
    )
}

export const Executioner__cannon_S = () => {
    return (<WeaponBlockBlue title='Execution plasm S'
        R='36"' Type='Hv' Type_num='D3+6' S='7' AP='-4' D='2' />
    )
}

export const Executioner__cannon_Sp = () => {
    return (<WeaponBlockBlue title='Execution plasm Sp'
        R='36"' Type='Hv' Type_num='D3+6' S='8' AP='-4' D='3'
        Text='*Если выпала 1 на попадание, владелец уничтожается.' />
    )
}

export const Exterminator_autocannon = () => {
    return (<WeaponBlock title='Exterminator auto'
        R='48"' Type='Hv' Type_num='6' S='8' AP='-2' D='2'
        Text='*Если выпала 1 на попадание, владелец уничтожается.' />
    )
}

export const Heavy_bolter = () => {
    return (<WeaponBlock title='Heavy bolter'
        R='36"' Type='Hv' Type_num='3' S='5' AP='-1' D='2'
        Text='*Если выпала 1 на попадание, владелец уничтожается.' />
    )
}

export const Heavy_flamer = () => {
    return (<WeaponBlock title='Heavy flamer'
        R='12"' Type='Hv' Type_num='D6' S='5' AP='-1' D='1'
        Text='*Атака автоматически попадает в цель.' />
    )
}

export const Heavy_stubber = () => {
    return (<WeaponBlock title='Heavy stubber'
        R='36"' Type='Hv' Type_num='3' S='4' AP='0' D='1' />
    )
}

export const Hunter_killer_missile = () => {
    return (<WeaponBlock title='Hunter-killer mis'
        R='48"' Type='Hv' Type_num='1' S='10' AP='-2' D='D6'
        Text='*Только 1 раз за бой.' />
    )
}

export const Leman_Russ_battle_cannon = () => {
    return (<WeaponBlock title='Leman Russ bat'
        R='72"' Type='Hv' Type_num='D6+3' S='8' AP='-2' D='3' />
    )
}

export const Militarum_plasma_S = () => {
    return (<WeaponBlockBlue title='Militarum plasm S'
        R='36"' Type='Hv' Type_num='D3' S='7' AP='-3' D='1' />
    )
}

export const Militarum_plasma_Sp = () => {
    return (<WeaponBlockBlue title='Militarum plasm Sp'
        R='36"' Type='Hv' Type_num='D3' S='8' AP='-3' D='2'
        Text='*При выпадении 1 на попадание, владелец получает 1 рану.' />
    )
}

export const Multi_melta = () => {
    return (<WeaponBlock title='Multi-melta'
        R='24"' Type='Hv' Type_num='2' S='8' AP='-4' D='D6'
        Text='*Если атака в половине дистанции, урон D6+2.' />
    )
}

export const Punisher_gatling_cannon = () => {
    return (<WeaponBlock title='Punisher gatling'
        R='24"' Type='Hv' Type_num='20' S='6' AP='-1' D='1' />
    )
}

export const Storm_bolter = () => {
    return (<WeaponBlock title='Storm bolter'
        R='24"' Type='Rf' Type_num='2' S='14' AP='0' D='1' />
    )
}

export const Vanquisher_battle_cannon = () => {
    return (<WeaponBlock title='Vanquisher battle'
        R='72"' Type='Hv' Type_num='1' S='4' AP='-5' D='D3+6'
        Text='*Неуязвимые спасброски не могут быть сделаны против этой атаки, и цель получает смертельные ранения D3 в дополнение к любому обычному урону.' />
    )
}

export const Lascannon = () => {
    return (<WeaponBlock title='Lascannon'
        R='48"' Type='Hv' Type_num='1' S='9' AP='-3' D='D6' />
    )
}

export const Militarum_multi_laser = () => {
    return (<WeaponBlock title='Militarum multilas'
        R='36"' Type='Hv' Type_num='4' S='6' AP='-1' D='1' />
    )
}

export const Missile_launcher_F = () => {
    return (<WeaponBlockBlue title='Missile launch F'
        R='48"' Type='Hv' Type_num='D6' S='4' AP='0' D='1' />
    )
}

export const Missile_launcher_K = () => {
    return (<WeaponBlockBlue title='Missile launch K'
        R='48"' Type='Hv' Type_num='1' S='8' AP='-2' D='D6' />
    )
}

export const Sentinel_chainsaw = () => {
    return (<WeaponBlock title='Sentinel chainsaw'
        R='-' Type='Ml' Type_num='-' S='-' AP='-2' D='2' />
    )
}

export const Autocannon = () => {
    return (<WeaponBlock title='Autocannon'
        R='48"' Type='Hv' Type_num='2' S='7' AP='-1' D='2' />
    )
}

export const Earthshaker_cannon = () => {
    return (<WeaponBlock title='Earthshaker cannon'
        R='240"' Type='Hv' Type_num='D6+3' S='10' AP='-3' D='2'
        Text='*Может поражать юнитов, которые не видны владельцу.' />
    )
}

export const Grenadier_gauntlet = () => {
    return (<WeaponBlock title='Grenadier gauntlet'
        R='18"' Type='As' Type_num='D6' S='4' AP='-1' D='1'
        Text='*Может поражать юнитов, которые не видны владельцу.' />
    )
}

export const Bullgryn_maul = () => {
    return (<WeaponBlock title='Bullgryn maul'
        R='-' Type='Ml' Type_num='-' S='+1' AP='-1' D='2' />
    )
}

export const Frag_bombs = () => {
    return (<WeaponBlock title='Frag bombs'
        R='6"' Type='Gr' Type_num='D6' S='3' AP='-2' D='1' />
    )
}

export const Chimera_heavy_bolter = () => {
    return (<WeaponBlock title='Chimera heavy bolter'
        R='36"' Type='Hv' Type_num='3' S='5' AP='-1' D='2' />
    )
}

export const Chimera_heavy_flamer = () => {
    return (<WeaponBlock title='Chir heavy flamer'
        R='12"' Type='Hv' Type_num='D6' S='5' AP='-1' D='1'
        Text='*Атака чески попадает в цель.' />
    )
}

export const Chimera_multi_laser = () => {
    return (<WeaponBlock title='Chir multi-laser'
        R='36"' Type='Hv' Type_num='4' S='6' AP='-1' D='1'
        Text='*Атака автоматически попадает в цель.' />
    )
}

export const Lasgun_array = () => {
    return (<WeaponBlock title='Lasgun array'
        R='24"' Type='Rf' Type_num='6' S='3' AP='0' D='1' />
    )
}

export const Plasma_pistol_S = () => {
    return (<WeaponBlockBlue title='Plasma pistol S'
        R='12"' Type='Ps' Type_num='1' S='7' AP='-3' D='1' />
    )
}

export const Plasma_pistol_SP = () => {
    return (<WeaponBlockBlue title='Plasma pistol Sp'
        R='12"' Type='Ps' Type_num='1' S='8' AP='-3' D='2'
        Text='*Если выпала 1 на попадание, владелец уничтожается.' />
    )
}

export const Storm_eagle_rockets = () => {
    return (<WeaponBlock title='Storm eagle rock'
        R='120"' Type='Hv' Type_num='D6+3' S='9' AP='-2' D='3'
        Text='*Оружие может нацеливаться на юнитов, которые не видны владельцу. Владелец может стрелять из этого оружия только 4 раза за бой.' />
    )
}

export const Force_stave = () => {
    return (<WeaponBlock title='Force stave'
        R='-' Type='Ml' Type_num='D6+3' S='+3' AP='-1' D='D3'
        Text='*Оружие может нацеливаться на юнитов, которые не видны владельцу. Владелец может стрелять из этого оружия только 4 раза за бой.' />
    )
}