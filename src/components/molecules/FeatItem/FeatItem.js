import React from 'react'
import Label from '../../atoms/Label/Label'
import Select from '../../atoms/Select/Select'
import Option from '../../atoms/Option/Option'

const FeatItem = (props) => {

    const { feats, levelGranted, featType } = props;
    
    return (
        <div className="row">
            <div className="col-1">
                <Label>{levelGranted}</Label>
            </div>
            <div className="col-2">
                <Label>{featType}</Label>
            </div>
            <div className="col-3">
                <Select>
                    {feats.map(feat => <Option key={feat}>{feat}</Option>)}
                </Select>
            </div>
            <div className="col">
                <Label>Description</Label>
            </div>
        </div>
    );
}

export default FeatItem