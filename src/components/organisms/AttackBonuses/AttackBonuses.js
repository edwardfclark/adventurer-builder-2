import React from 'react'
import Label from '../../atoms/Label/Label'

const AttackBonuses = (props) => {
    const { bab, str, dex } = props;
    return (
        <div className="row">
            <div className="col">
                <Label>BAB:</Label> {bab}
            </div>
            <div className="col">
                <Label>Melee:</Label> {bab+str}
            </div>
            <div className="col">
                <Label>Ranged:</Label> {bab+dex}
            </div>
        </div>
    );
}

export default AttackBonuses