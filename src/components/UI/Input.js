import React from 'react'
import classes from './Input.module.css'

// const Input = (props) => {
//   return (
//     <div className={classes.input}>
//       <label htmlFor={props.input.id}>{props.label}</label>
//       <input {...props.input} />
//     </div>
//   )
// }

const Input = React.forwardRef(({ label, input }, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  )
})

export default Input
