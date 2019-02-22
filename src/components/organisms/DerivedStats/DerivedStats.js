import React from 'react'

const DerivedStats = (props) => {
    const { level, statMods, hd } = props;
    return(
        <React.Fragment>
            <Card>
                <Card type="body">
                    <Defense 
                        level={level}
                        statMods={statMods}
                        hd={hd}
                    />
                </Card>
                <Card type="footer">
                
                </Card>
            </Card>
        </React.Fragment>
    );
}

export default DerivedStats;