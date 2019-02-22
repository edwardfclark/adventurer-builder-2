import React from 'react'
import Information from '../Information/Information'
import StatsArray from '../StatsArray/StatsArray'
import Label from '../../atoms/Label/Label'
import Card from '../../atoms/Card/Card'

// UserDefinedStats expects the stats object as a property, which dynamically generates StatsArray.

const UserDefinedStats = (props) => {
  return (
    <Card>
      <Card type="header">
        <Information />
      </Card>
      <Card type="body">
        <StatsArray
          stats={props.stats}
          raceModActive={props.raceModActive}
        />
      </Card>
      <Card type="footer">
        <div className="row">
          <div className="col offset-6">
            <Label>Points:</Label>
          </div>
          <div className="col-3">
            ###
          </div>
        </div>
      </Card>

    </Card>
  )
}

export default UserDefinedStats
