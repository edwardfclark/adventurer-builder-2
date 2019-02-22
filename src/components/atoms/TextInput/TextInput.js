import React from 'react'

const TextInput = props => { 
    const { className } = props;
    return <input className={className || "form-control form-control-sm"} {...props} />
}

export default TextInput
