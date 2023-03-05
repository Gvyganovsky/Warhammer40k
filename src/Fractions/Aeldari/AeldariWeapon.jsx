import { WeaponBlock, WeaponBlockBlue } from '../../Components/WeaponBlock';

export const Shuriken_pistol = () => {
    return (<WeaponBlock title='Shuriken pistol'
        R='12"' Type='Ps' Type_num='1' S='4' AP='-1' D='1' />
    )
}

export const Witch_staff = () => {
    return (<WeaponBlock title='Witch staff'
        R='-' Type='Ml' Type_num='-' S='-' AP='-1' D='D3'
        Text='*Неизмененный бросок раны 2+ всегда успешен.' />
    )
}

export const Aeldari_flamer = () => {
    return (<WeaponBlock title='Aeldari flamer'
        R='12"' Type='As' Type_num='D6' S='4' AP='0' D='1'
        Text='*Атака автоматически попадает в цель.' />
    )
}

export const Aeldari_mis_Sn = () => {
    return (<WeaponBlockBlue title='Aeldari mis Sn'
        R='48"' Type='Hv' Type_num='D6' S='4' AP='-1' D='1' />
    )
}

export const Aeldari_mis_S = () => {
    return (<WeaponBlockBlue title='Aeldari mis S'
        R='48"' Type='Hv' Type_num='1' S='8' AP='-2' D='D6' />
    )
}

export const Bright_lance = () => {
    return (<WeaponBlock title='Bright lance'
        R='36"' Type='Hv' Type_num='1' S='8' AP='-4' D='D3+3' />
    )
}

export const Ghostglaive_C = () => {
    return (<WeaponBlockBlue title='Ghostglaive C'
        R='-' Type='Ml' Type_num='-' S='+2' AP='-4' D='D3+3' />
    )
}

export const Ghostglaive_S = () => {
    return (<WeaponBlockBlue title='Ghostglaive S'
        R='-' Type='Ml' Type_num='-' S='-' AP='-2' D='2'
        Text='*Делайте 2 броска удара вместо 1.' />
    )
}

export const Scatter_laser = () => {
    return (<WeaponBlock title='Scatter laser'
        R='36"' Type='Hv' Type_num='6' S='6' AP='0' D='1' />
    )
}

export const Shuriken_cannon = () => {
    return (<WeaponBlock title='Shuriken cannon'
        R='24"' Type='Hv' Type_num='3' S='6' AP='-1' D='2' />
    )
}

export const Shuriken_catapult = () => {
    return (<WeaponBlock title='Shuriken catap'
        R='18"' Type='As' Type_num='2' S='4' AP='-1' D='1' />
    )
}

export const Starcannon = () => {
    return (<WeaponBlock title='Starcannon'
        R='36"' Type='Hv' Type_num='2' S='7' AP='-3' D='2' />
    )
}

export const Wraithbone_fists = () => {
    return (<WeaponBlock title='Wraithbone fists'
        R='-' Type='Ml' Type_num='-' S='-' AP='-3' D='3' />
    )
}

export const Twin_shuriken_catapult = () => {
    return (<WeaponBlock title='Twin shuriken'
        R='18"' Type='As' Type_num='4' S='4' AP='-1' D='1' />
    )
}

export const Plasma_grenade = () => {
    return (<WeaponBlock title='Plasma grenade'
        R='6"' Type='Gr' Type_num='D6' S='4' AP='-1' D='1' />
    )
}