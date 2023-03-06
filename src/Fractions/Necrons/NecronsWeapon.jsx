import { WeaponBlock, WeaponBlockBlue } from '../../Components/WeaponBlock';

export const Gauss_blaster = () => {
    return (<WeaponBlock title='Gauss blaster'
        R='30"' Type='Rf' Type_num='1' S='5' AP='-2' D='1' />
    )
}

export const Tesla_carbine = () => {
    return (<WeaponBlock title='Tesla carbine'
        R='24"' Type='As' Type_num='2' S='5' AP='0' D='1'
        Text='*Неизмененный бросок хита 6 дает 2 дополнительных попадания.' />
    )
}

export const Staff_of_light = () => {
    return (<WeaponBlock title='Staff of light'
        R='18"' Type='As' Type_num='3' S='5' AP='-2' D='1' />
    )
}

export const Tachyon_arrow = () => {
    return (<WeaponBlock title='Tachyon arrow'
        R='120"' Type='As' Type_num='1' S='12' AP='-5' D='D6'
        Text='*Владелец может стрелять из этого оружия только один раз за бой.' />
    )
}

export const Hyperphase_glaive = () => {
    return (<WeaponBlock title='Hyperphase glaive'
        R='-' Type='Ml' Type_num='-' S='+2' AP='-3' D='D3' />
    )
}

export const Hyperphase_sword = () => {
    return (<WeaponBlock title='Hyperphase sword'
        R='-' Type='Ml' Type_num='-' S='+1' AP='-3' D='1' />
    )
}

export const Staff_of_light_M = () => {
    return (<WeaponBlock title='Staff of light M'
        R='-' Type='Ml' Type_num='-' S='-' AP='-2' D='1' />
    )
}

export const Voidblade = () => {
    return (<WeaponBlock title='Voidblade'
        R='-' Type='Ml' Type_num='-' S='-' AP='-3' D='1'
        Text='*Cовершите 1 дополнительную атаку этим оружием.' />
    )
}

export const Voidscythe = () => {
    return (<WeaponBlock title='Voidscythe'
        R='-' Type='Ml' Type_num='-' S='x2' AP='-4' D='3'
        Text='*Вычтите 1 из броска попадания этой атаки.' />
    )
}

export const Warscythe = () => {
    return (<WeaponBlock title='Warscythe'
        R='-' Type='Ml' Type_num='-' S='x2' AP='-4' D='2'
        Text='*Вычтите 1 из броска попадания этой атаки.' />
    )
}

export const Twin_tesla_destructor = () => {
    return (<WeaponBlock title='Twin tesla destructor'
        R='36"' Type='Hv' Type_num='10' S='7' AP='0' D='1'
        Text='*Неизмененный бросок хита из 6 дает 2 дополнительных попадания.' />
    )
}

export const Particle_beamer = () => {
    return (<WeaponBlock title='Particle beamer'
        R='18"' Type='As' Type_num='6' S='5' AP='0' D='1'
        Text='*Неизмененный бросок хита из 6 дает 2 дополнительных попадания.' />
    )
}

export const Twin_gauss_blaster = () => {
    return (<WeaponBlock title='Twin gauss blaster'
        R='30"' Type='Rf' Type_num='2' S='5' AP='-2' D='1'
        Text='*Неизмененный бросок хита из 6 дает 2 дополнительных попадания.' />
    )
}

export const Twin_tesla_carbine = () => {
    return (<WeaponBlock title='Twin tesla car'
        R='24"' Type='As' Type_num='4' S='5' AP='0' D='1'
        Text='*Неизмененный бросок хита из 6 дает 2 дополнительных попадания.' />
    )
}