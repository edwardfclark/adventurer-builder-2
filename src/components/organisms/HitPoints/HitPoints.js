import React from 'react'
import Label from '../../atoms/Label/Label'

const HitPoints = (props) => {
    const { hd, level, con, favoredClass } = props;

    let perLevel = hd % 2 === 0 ? (hd/2)+1 : Math.ceil(hd/2);
    let levelBonus = (level-1)*perLevel;
    let conBonus = con * level;
    let hp = hd+levelBonus+conBonus+favoredClass.hp;

    return (
        <div className="row">
            <div className="col-4">
                <Label>HP:</Label>
            </div>
            <div className="col-4">
                {hp}
            </div>
        </div>
    );
}

export default HitPoints;