import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height:'10px'}}>
   { props.alert && <div class={`alert alert-${props.alert.condition} alert-dismissible fade show`} role="alert">
    <strong>{props.alert.message}</strong> 
  </div>}
  </div>
  )
}
