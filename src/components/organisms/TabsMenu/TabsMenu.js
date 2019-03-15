import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faRunning, faBookOpen, faToolbox } from '@fortawesome/free-solid-svg-icons'
import TabContent from '../../atoms/TabContent/TabContent'

const TabsMenu = (props) => {
    const { skills, feats, classFeatures, items } = props;
    return (
        <React.Fragment>
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item"><a data-toggle="tab" role="tab" className="nav-link active" id="skills-tab" href="#skills-content"><FontAwesomeIcon icon={faBook} /> Skills</a></li>
                <li className="nav-item"><a data-toggle="tab" role="tab" className="nav-link" id="feats-tab" href="#feats-content"><FontAwesomeIcon icon={faRunning} /> Feats</a></li>
                <li className="nav-item"><a data-toggle="tab" role="tab" className="nav-link" id="class-tab" href="#class-content"><FontAwesomeIcon icon={faBookOpen} /> Class Features</a></li>
                <li className="nav-item"><a data-toggle="tab" role="tab" className="nav-link" id="items-tab" href="#items-content"><FontAwesomeIcon icon={faToolbox} /> Items</a></li>
            </ul>
            <div class="tab-content">
                <TabContent id="skills-content" active={true}>{skills || "No skills have been passed."}</TabContent>
                <TabContent id="feats-content">{feats || "No feats have been passed."}</TabContent>
                <TabContent id="class-content">{classFeatures || "No class features have been passed."}</TabContent>
                <TabContent id="items-content">{items || "No items have been passed."}</TabContent>
            </div>

        </React.Fragment>
    );
}

export default TabsMenu;