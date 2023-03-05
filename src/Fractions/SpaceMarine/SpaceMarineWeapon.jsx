import { WeaponBlock, WeaponBlockBlue } from '../../Components/WeaponBlock';

export const Bolt_pistol = () => {
    return (<WeaponBlock title='Bolt pistol'
        R='12"' Type='Ps' Type_num='1' S='4' AP='0' D='1' />
    )
}

export const Bolt_sniper_E = () => {
    return (<WeaponBlockBlue title='Bolt sniper E'
        R='36"' Type='Hv' Type_num='1' S='5' AP='-1' D='1'
        Text='*Добавляйте 1 к броску попадания этой атаки. Цели не получают преимуществ укрытия.' />
    )
}

export const Bolt_sniper_H = () => {
    return (<WeaponBlockBlue title='Bolt sniper H'
        R='36"' Type='Hv' Type_num='D3' S='5' AP='0' D='1'
        Text='*Добавляйте 1 к броску попадания этой атаки. Цели не получают преимуществ укрытия.' />
    )
}

export const Bolt_sniper_M = () => {
    return (<WeaponBlockBlue title='Bolt sniper M'
        R='36"' Type='Hv' Type_num='1' S='5' AP='-2' D='2'
        Text='*Бросок раны 6 наносит цели 1 смертельную рану в дополнение к любому обычному урону.' />
    )
}

export const Instigator_bolt_carbine = () => {
    return (<WeaponBlock title='Instigator bolt'
        R='24"' Type='As' Type_num='1' S='4' AP='-1' D='2' />
    )
}

export const Las_fusil = () => {
    return (<WeaponBlock title='Las fusil'
        R='36"' Type='Hv' Type_num='1' S='8' AP='-3' D='3' />
    )
}

export const Frag_grenades = () => {
    return (<WeaponBlock title='Frag grenades'
        R='6"' Type='Gr' Type_num='D6' S='3' AP='0' D='1' />
    )
}

export const Krak_grenades = () => {
    return (<WeaponBlock title='Krak grenades'
        R='6"' Type='Gr' Type_num='1' S='6' AP='-1' D='D3' />
    )
}

export const Krak_missiles = () => {
    return (<WeaponBlockBlue title='Krak missiles'
        R='48"' Type='Hv' Type_num='1' S='8' AP='-2' D='D6' />
    )
}

export const Frag_missiles = () => {
    return (<WeaponBlockBlue title='Krak missiles'
        R='48"' Type='Hv' Type_num='D6' S='4' AP='0' D='1' />
    )
}

export const Icarus_missiles = () => {
    return (<WeaponBlockBlue title='Icarus missiles'
        R='48"' Type='Hv' Type_num='D3' S='7' AP='-1' D='2'
        Text='*Против авиации добавляйте 1 к броску попадания этой атаки.' />
    )
}

export const Fragstorm_grenade_launcher = () => {
    return (<WeaponBlockBlue title='Fragstorm grenade'
        R='18"' Type='As' Type_num='D6' S='4' AP='0' D='1' />
    )
}

export const Ironhail_heavy_stubber = () => {
    return (<WeaponBlockBlue title='Ironhail hv stub'
        R='36"' Type='Hv' Type_num='4' S='4' AP='-1' D='1' />
    )
}

export const Ironhail_skytalon_array = () => {
    return (<WeaponBlockBlue title='Ironhail skytalon'
        R='36"' Type='Hv' Type_num='8' S='4' AP='-1' D='1'
        Text='*Против авиации добавляйте 1 к броску попадания этой атаки.' />
    )
}

export const Storm_bolter = () => {
    return (<WeaponBlockBlue title='Storm bolter'
        R='24"' Type='Rf' Type_num='2' S='4' AP='0' D='1' />
    )
}

export const Marksman_bolt_carbine = () => {
    return (<WeaponBlockBlue title='Marksman bolt'
        R='24"' Type='Rf' Type_num='1' S='4' AP='0' D='1'
        Text='*Неизмененный бросок попадания 6 автоматически ранит цель.' />
    )
}

export const Master_crafted_occulus_bolt_carbine = () => {
    return (<WeaponBlockBlue title='M/c bolt'
        R='24"' Type='Rf' Type_num='1' S='4' AP='0' D='2'
        Text='*Цель не получает преимуществ укрытия от этой атаки.' />
    )
}

export const Paired_combat_blades = () => {
    return (<WeaponBlockBlue title='Paired blades'
        R='-' Type='Ml' Type_num='-' S='4' AP='-1' D='1' />
    )
}

export const Accelerator_autocannon = () => {
    return (<WeaponBlockBlue title='Accelerator auto'
        R='48"' Type='Hv' Type_num='3' S='7' AP='-1' D='2' />
    )
}