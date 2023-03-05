import { WeaponBlock, WeaponBlockBlue } from '../../Components/WeaponBlock'

export const Heavy_rail_rifle = () => {
    return (<WeaponBlock title='Heavy rail rifle'
        R='60"' Type='Hv' Type_num='2' S='9' AP='-4' D='D3+3' Text='*Прибавьте 1 к урону.' />)
}

export const High_yield_mis_pod = () => {
    return (<WeaponBlock title='High-yield mis pod'
        R='30"' Type='Hv' Type_num='4' S='7' AP='-2' D='2' />
    )
}

export const Seeker_missile = () => {
    return (<WeaponBlock title='Seeker missile'
        R='72"' Type='Hv' Type_num='1' S='9' AP='-3' D='2D3' Text='*Только 1 раз за бой.' />
    )
}

export const Twin_plasma_rifle = () => {
    return (<WeaponBlock title='Twin plasma rifle'
        R='30"' Type='As' Type_num='2' S='8' AP='-4' D='3' />
    )
}

export const Twin_smart_mis = () => {
    return (<WeaponBlock title='Twin smart mis'
        R='30"' Type='Hv' Type_num='8' S='5' AP='-1' D='1'
        Text='*Может поражать юнитов, которые не видны владельцу.' />
    )
}

export const Crushing_bulk = () => {
    return (<WeaponBlock title='Crushing bulk'
        R='-' Type='Ml' Type_num='-' S='+1' AP='-1' D='1' />
    )
}

export const Firebl_pulse_rifle = () => {
    return (<WeaponBlock title='Crushing bulk'
        R='36"' Type='Rf' Type_num='1' S='5' AP='-2' D='2' />
    )
}

export const Air_frag_proj = () => {
    return (<WeaponBlock title='Crushing bulk'
        R='24"' Type='As' Type_num='D6' S='4' AP='-1' D='1'
        Text='*Может поражать юнитов, которые не видны владельцу.' />
    )
}

export const Burst_cannon = () => {
    return (<WeaponBlock title='Crushing bulk'
        R='18"' Type='As' Type_num='6' S='5' AP='0' D='1' />
    )
}

export const Cyclic_ion_bl_S = () => {
    return (<WeaponBlockBlue title='Cyclic ion bl. S'
        R='18"' Type='As' Type_num='3' S='7' AP='-2' D='1' />
    )
}

export const Cyclic_ion_bl_O = () => {
    return (<WeaponBlockBlue title='Cyclic ion bl. S'
        R='18"' Type='As' Type_num='3' S='8' AP='-2' D='2'
        Text='*Если выпала 1 на попадание, юнит получает урон.' />
    )
}

export const Fusion_blaster = () => {
    return (<WeaponBlock title='Fusion blaster'
        R='18"' Type='As' Type_num='1' S='8' AP='-4' D='D6'
        Text='*Если атака в половине дистанции, урон D6+2.' />
    )
}

export const Missile_pod = () => {
    return (<WeaponBlock title='Missile pod'
        R='30"' Type='As' Type_num='2' S='7' AP='-2' D='2' />
    )
}

export const Plasma_rifle = () => {
    return (<WeaponBlock title='Missile pod'
        R='30"' Type='As' Type_num='1' S='8' AP='-4' D='3' />
    )
}

export const Tau_flamer = () => {
    return (<WeaponBlock title='T’au flamer'
        R='12"' Type='As' Type_num='D6+2' S='4' AP='0' D='1'
        Text='*Атака автоматически попадает в цель.' />
    )
}

export const Pulse_carbine = () => {
    return (<WeaponBlock title='Pulse carbine'
        R='24"' Type='As' Type_num='2' S='5' AP='0' D='1' />
    )
}

export const Honour_stave = () => {
    return (<WeaponBlock title='Honour stave'
        R='-' Type='Ml' Type_num='-' S='+2' AP='-1' D='2'
        Text='*Вычтите 1 из броска попадания.' />
    )
}

export const Pulse_rifle = () => {
    return (<WeaponBlock title='Pulse rifle'
        R='36"' Type='Rf' Type_num='1' S='5' AP='-1' D='1' />
    )
}

export const Pulse_pistol = () => {
    return (<WeaponBlock title='Pulse pistol'
        R='12"' Type='Ps' Type_num='1' S='5' AP='-1' D='1' />
    )
}

export const Cyclic_ion_raker_St = () => {
    return (<WeaponBlockBlue title='Cyclic ion raker St'
        R='36"' Type='Hv' Type_num='6' S='7' AP='-2' D='2' />
    )
}

export const Cyclic_ion_raker_Ov = () => {
    return (<WeaponBlockBlue title='Cyclic ion raker O'
        R='36"' Type='Hv' Type_num='6' S='8' AP='-2' D='3'
        Text='*Если выпала 1 на попадание, юнит получает урон.' />
    )
}

export const Fusion_collider = () => {
    return (<WeaponBlock title='Fusion collider'
        R='24"' Type='Hv' Type_num='3' S='9' AP='-4' D='D6'
        Text='*Если атака в половине дистанции, урон D6+2.' />
    )
}

export const Ghostkeel_fists = () => {
    return (<WeaponBlock title='Ghostkeel fists'
        R='-' Type='Ml' Type_num='-' S='+1' AP='-1' D='2' />
    )
}

export const Hv_burst_cannon = () => {
    return (<WeaponBlock title='Hv burst cannon'
        R='36"' Type='Hv' Type_num='-' S='+1' AP='-1' D='2' />
    )
}

export const Ion_accelerator_S = () => {
    return (<WeaponBlockBlue title='Ion accelerator S'
        R='72"' Type='Hv' Type_num='6' S='7' AP='-3' D='3' />
    )
}

export const Ion_accelerator_O = () => {
    return (<WeaponBlockBlue title='Ion accelerator O'
        R='72"' Type='Hv' Type_num='6' S='8' AP='-3' D='4'
        Text='*Если выпала 1 на попадание, юнит получает урон.' />
    )
}

export const Smart_mis_system = () => {
    return (<WeaponBlock title='Smart mis system'
        R='30"' Type='Hv' Type_num='4' S='5' AP='-1' D='1'
        Text='*Может поражать юнитов, которые не видны владельцу.' />
    )
}

export const Riptide_fists = () => {
    return (<WeaponBlock title='Riptide fists'
        R='-' Type='Ml' Type_num='4' S='+1' AP='-2' D='2' />
    )
}

export const Cluster_rocket_syst = () => {
    return (<WeaponBlock title='Cluster rocket syst'
        R='48"' Type='Hv' Type_num='4D6' S='5' AP='-1' D='1'
        Text='*Минимум 3 атаки против юнитов с 6+ моделями. Максимум - 11+ моделями.' />
    )
}

export const Destroyer_missile = () => {
    return (<WeaponBlock title='Destroyer missile'
        R='72"' Type='Hv' Type_num='1' S='12' AP='-5' D='2D3'
        Text='*Нельзя атаковать более чем 2 раз за бой.' />
    )
}

export const Pulse_blast_F = () => {
    return (<WeaponBlockBlue title='Pulse blast F'
        R='24"' Type='Hv' Type_num='2' S='16' AP='-4' D='12'
        Text='*Если выпала 1 на попадание, юнит получает урон.' />
    )
}

export const Pulse_blast_D = () => {
    return (<WeaponBlockBlue title='Pulse blast D'
        R='48"' Type='Hv' Type_num='6' S='12' AP='-2' D='4'
        Text='*Если выпала 1 на попадание, юнит получает урон.' />
    )
}

export const Pulse_driver_can = () => {
    return (<WeaponBlock title='Pulse driver can'
        R='72"' Type='Hv' Type_num='3D3' S='10' AP='-4' D='3'
        Text='*Минимум 3 атаки против юнитов с 6+ моделями. Максимум - 11+ моделями.' />
    )
}

export const Twin_air_frag = () => {
    return (<WeaponBlock title='Pulse driver can'
        R='24"' Type='As' Type_num='2D6' S='4' AP='-1' D='1'
        Text='*Может поражать юнитов, которые не видны владельцу.
        Минимум 3 атаки против юнитов с 6+ моделями. Максимум - 11+ моделями.' />
    )
}

export const Twin_burst_can = () => {
    return (<WeaponBlock title='Pulse driver can'
        R='18"' Type='As' Type_num='12' S='5' AP='0' D='1' />
    )
}

export const Twin_Tau_flamer = () => {
    return (<WeaponBlock title='Twin T’au flamer'
        R='12"' Type='As' Type_num='2D6+4' S='4' AP='0' D='1'
        Text='*Атака автоматически попадает в цель.' />
    )
}

export const Thund_footfalls = () => {
    return (<WeaponBlock title='Thund footfalls'
        R='-' Type='Ml' Type_num='-' S='-' AP='-2' D='2' />
    )
}

export const Smart_missile_syst = () => {
    return (<WeaponBlock title='Thund footfalls'
        R='30"' Type='Hv' Type_num='4' S='5' AP='-1' D='1'
        Text='*Может поражать юнитов, которые не видны владельцу.' />
    )
}















