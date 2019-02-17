import React from 'react'
import Information from '../Information/Information'
import StatsArray from '../StatsArray/StatsArray'
import Label from '../../atoms/Label/Label'

// UserDefinedStats expects the stats object as a property, which dynamically generates StatsArray.

const UserDefinedStats = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <Information />
      </div>
      <div className="card-body">
        <StatsArray
          stats={props.stats}
          raceModActive={props.raceModActive}
        />
      </div>
      <div className="card-footer">
        <div className="row">
          <div className="col offset-6">
            <Label>Points Cost:</Label>
          </div>
          <div className="col-3">
                        ###
          </div>
        </div>
      </div>

    </div>
  )
}

export default UserDefinedStats
