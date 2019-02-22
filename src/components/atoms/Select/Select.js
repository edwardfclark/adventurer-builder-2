import React from 'react'

const Select = (props) => {
  const { className } = props;
  return <select className={className || "form-control form-control-sm"} {...props} />
}

export default Select
