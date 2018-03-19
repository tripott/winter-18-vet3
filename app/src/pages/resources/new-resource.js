import React from 'react'
import { Link } from 'react-router-dom'

const NewResource = ({
  // We're adding these as props that we're going to use.  Creating a props object and destructuring it into pieces.
  id, // props.id
  name, // props.name
  value, // props.value
  onChange, // props.onChange
  onSubmit, // props.onSubmit
  cancelUrl, //props.cancelUrl
  showValueInput // props.showValueInput
}) => {
  /* creates a ternary to see whether there's a value field.
   If it's true, it will show the value input.  If false, it returns null. */
  const valueInput = showValueInput ? (
    <div>
      <label className="dib">value</label>
      <input
        type="text"
        value={value}
        onChange={e => onChange('value', e.target.value)}
      />
    </div>
  ) : null
  /* Below, we're showing our name, id, and possibly our value field (if showValueInput is set to true) */
  return (
    /* onSubmit is one of our props. It's defined in our starwars/form.js file
    (or buzzwords/form.js, or cookies/form.js, etc.). When they click submit,
    pass in ID, name, and value to the onSubmit function as an object.

    onChange: on a change, we're going to update our 'name' value in state with the
    value of what's in our text box */
    <form onSubmit={onSubmit({ id, name, value })}>
      <div>
        <label className="dib">id</label>
        <div>{id}</div>
      </div>
      <div>
        <label className="dib">name</label>

        <input
          type="text"
          value={name}
          onChange={e => onChange('name', e.target.value)}
        />
      </div>
      {valueInput}
      <div>
        <button>Submit</button>
        <Link to={cancelUrl}>Cancel</Link>
      </div>
    </form>
  )
}

export default NewResource
