import React from 'react'

// TabContent takes one property - 'active'. If true, it will show as active with Bootstrap classes.
// Don't pass className properties to TabContent.

const TabContent = (props) => {
    const { active } = props;
    return (
        <div className={`tab-pane fade ${active ? "show active " : null} border-left border-right border-bottom card-body`} role="tabpanel" {...props}/>
    );
}

export default TabContent