import React from 'react';
import HitPoints from '../HitPoints/HitPoints';
import ArmorClass from '../ArmorClass/ArmorClass';

const Defense = (props) => {
    const { level, statMods, ac, charClass, hd } = props;

    return(
        <React.Fragment>
            <HitPoints 
                level={level}
                con={statMods.con}
                hd={hd}
            />
            <ArmorClass 
                ac={ac}
                dex={statMods.dex}
            />
        </React.Fragment>
    );
}

export default Defense;