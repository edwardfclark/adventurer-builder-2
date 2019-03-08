import React from 'react'

import Label from '../../atoms/Label/Label'
import NumberInput from '../../atoms/NumberInput/NumberInput'

const Skill = (props) => {
    const { skill } = props;
    return (
        <div className="row">
            <div className="col"> {/* Skill */}
                <Label>{skill}</Label>
            </div>
            <div className="col"> {/* Ranks */}

            </div>
            <div className="col"> {/* Attribute */}

            </div>
            <div className="col"> {/* Misc Bonuses */}

            </div>
            <div className="col"> {/* Total */}
            
            </div>
        </div>
    );
}

export default Skill