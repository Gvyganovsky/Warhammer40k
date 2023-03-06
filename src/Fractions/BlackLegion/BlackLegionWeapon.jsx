import { WeaponBlock, WeaponBlockBlue } from '../../Components/WeaponBlock';

export const Bolt_pistol = () => {
    return (<WeaponBlock title='Bolt pistol'
        R='12"' Type='Ps' Type_num='1' S='4' AP='0' D='1' />
    )
}

export const Accursed_crozius = () => {
    return (<WeaponBlock title='Accursed crozius'
        R='-' Type='Ml' Type_num='-' S='+2' AP='-1' D='2' />
    )
}

export const Close_combat_weapon = () => {
    return (<WeaponBlock title='Cl combat weapon'
        R='-' Type='Ml' Type_num='-' S='-' AP='0' D='1' />
    )
}

export const Frag_grenade = () => {
    return (<WeaponBlock title='Frag grenade'
        R='6"' Type='Gr' Type_num='D6' S='3' AP='0' D='1' />
    )
}

export const Krak_grenade = () => {
    return (<WeaponBlock title='Krak grenade'
        R='6"' Type='Gr' Type_num='1' S='6' AP='-1' D='D3' />
    )
}

export const Plasma_pistol_S = () => {
    return (<WeaponBlockBlue title='Plasma pistol S'
        R='12"' Type='Ps' Type_num='1' S='7' AP='-3' D='1' />
    )
}

export const Plasma_pistol_Sp = () => {
    return (<WeaponBlockBlue title='Plasma pistol Sp'
        R='12"' Type='Ps' Type_num='1' S='8' AP='-3' D='2'
        Text='*Если бросок попадания равен 1, то носитель уничтожается после стрельбы из этого оружия.' />
    )
}

export const Boltgun = () => {
    return (<WeaponBlock title='Boltgun'
        R='24"' Type='Rf' Type_num='1' S='4' AP='0' D='1'
        Text='*Если бросок попадания равен 1, то носитель уничтожается после стрельбы из этого оружия.' />
    )
}

export const Flamer = () => {
    return (<WeaponBlock title='Flamer'
        R='12"' Type='As' Type_num='D6' S='4' AP='0' D='1'
        Text='*Атака автоматически попадает в цель.' />
    )
}

export const Havoc_autocannon = () => {
    return (<WeaponBlock title='Havoc autocan'
        R='48"' Type='Hv' Type_num='2' S='7' AP='-2' D='2' />
    )
}

export const Lascannon = () => {
    return (<WeaponBlock title='Lascannon'
        R='48"' Type='Hv' Type_num='1' S='9' AP='-3' D='D6' />
    )
}

export const Chainsword = () => {
    return (<WeaponBlock title='Chainsword'
        R='-' Type='Ml' Type_num='-' S='-' AP='-1' D='1'
        Text='*Cовершите 1 дополнительную атаку этим оружием.' />
    )
}

export const Combi_bolter = () => {
    return (<WeaponBlock title='Combi-bolter'
        R='24"' Type='Rf' Type_num='2' S='4' AP='0' D='1' />
    )
}

export const Heavy_flamer = () => {
    return (<WeaponBlock title='Heavy flamer'
        R='12"' Type='Hv' Type_num='D6' S='5' AP='-1' D='1'
        Text='*Атака автоматически попадает в цель.' />
    )
}

export const Helbrute_plasma_cannon = () => {
    return (<WeaponBlock title='Helbrute plasma'
        R='36"' Type='Hv' Type_num='D3' S='8' AP='-3' D='3'
        Text='*Неизмененный бросок хита, равный 1, владелец получает 1 смертельную рану после стрельбы из этого оружия.' />
    )
}

export const Missile_launcher_F = () => {
    return (<WeaponBlockBlue title='Missile launcher F'
        R='48"' Type='Hv' Type_num='D6' S='4' AP='0' D='1' />
    )
}

export const Missile_launcher_K = () => {
    return (<WeaponBlockBlue title='Missile launcher K'
        R='48"' Type='Hv' Type_num='1' S='8' AP='-2' D='D6' />
    )
}

export const Multi_melta = () => {
    return (<WeaponBlockBlue title='Multi melta'
        R='24"' Type='Hv' Type_num='1' S='8' AP='-4' D='D6'
        Text='*Атака, нацелена на юнита в пределах половины дистанции, эта атака наносит урон, характерный для D6+2.' />
    )
}

export const Reaper_autocannon = () => {
    return (<WeaponBlock title='Reaper auto'
        R='36"' Type='Hv' Type_num='4' S='7' AP='-2' D='1' />
    )
}

export const Twin_heavy_bolter = () => {
    return (<WeaponBlock title='Twin heavy bolt'
        R='36"' Type='Hv' Type_num='6' S='5' AP='-1' D='2' />
    )
}

export const Twin_lascannon = () => {
    return (<WeaponBlock title='Twin lascannon'
        R='48"' Type='Hv' Type_num='2' S='9' AP='-3' D='D6' />
    )
}

export const Helbrute_fist = () => {
    return (<WeaponBlock title='Helbrute fist'
        R='-' Type='Ml' Type_num='-' S='x2' AP='-3' D='3'
        Text='*Если носитель сражается, если он оснащен 2 кулаками Helbrute, он совершает 1 дополнительную атаку с помощью 1 из этих видов оружия.' />
    )
}

export const Helbrute_hammer = () => {
    return (<WeaponBlock title='Helbrute hammer'
        R='-' Type='Ml' Type_num='-' S='x2' AP='-4' D='D6'
        Text='*Вычтите 1 из броска попадания этой атаки.' />
    )
}

export const Power_scourge = () => {
    return (<WeaponBlock title='Power scourge'
        R='-' Type='Ml' Type_num='-' S='+1' AP='-2' D='2'
        Text='*Совершите 3 дополнительные атаки этим оружием.' />
    )
}

export const Daemon_blade = () => {
    return (<WeaponBlock title='Daemon blade'
        R='-' Type='Ml' Type_num='-' S='-' AP='-2' D='2'
        Text='*При броске с неизмененным ранением 6, цель получает 1 смертельное ранение в дополнение к любому обычному урону.' />
    )
}

export const Heavy_chainaxe = () => {
    return (<WeaponBlock title='Heavy chainaxe'
        R='-' Type='Ml' Type_num='-' S='+4' AP='-4' D='2'
        Text='*Вычтите 1 из броска попадания этой атаки.' />
    )
}