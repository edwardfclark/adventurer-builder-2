import React from 'react'
import AttackBonuses from '../AttackBonuses/AttackBonuses'
import CMB from '../CMB/CMB'

const Offense = (props) => {
    const { statMods, bab } = props;
    return (
        <React.Fragment>
            <AttackBonuses 
                bab={bab}
                str={statMods.str}
                dex={statMods.dex}
            />
            <CMB 
                bab={bab}
                str={statMods.str}
            />
        </React.Fragment>
    );
}

export default Offense;