import React from 'react'
import Label from '../../atoms/Label/Label'

const ArmorClass = (props) => {

    const { dex, maxDexBonus } = props;
    const { armor, shield, deflection, dodge, luck, sacred, natural } = props.ac;
    let dexBonus = maxDexBonus === null ? dex : dex <= maxDexBonus ? dex : maxDexBonus;

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-4">
                    <Label>AC:</Label>
                </div>
                <div className="col-4">
                    {armor+
                    shield+
                    deflection+
                    dodge+
                    luck+
                    sacred+
                    natural+
                    dexBonus+
                    10}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Label>FF:</Label> {armor+shield+deflection+luck+sacred+natural+10}
                </div>
                <div className="col">
                    <Label>Touch:</Label> {dexBonus+luck+deflection+dodge+sacred+10}
                </div>
                <div className="col">
                    <Label>FF-T:</Label> {10}
                </div>
            </div>
        </React.Fragment>
    );

}

export default ArmorClass