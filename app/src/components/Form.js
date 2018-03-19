import React from 'react'
import { Link } from 'react-router-dom'

const Form = ({
  // We're adding these as props that we're going to use.  Creating a props object and destructuring it into pieces.
  _id,
  name,
  formalName,
  shortDesc,
  purpose,
  primaryPhone,
  value,
  onChange,
  onSubmit,
  cancelUrl,
  showValueInput
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
    <form onSubmit={onSubmit({ _id, name, value })}>
      <div>
        <label className="dib">Name: </label>
        <input
          type="text"
          value={name}
          onChange={e => onChange('name', e.target.value)}
        />
      </div>
      <div>
        <label className="dib">Formal Name: </label>
        <input
          type="text"
          value={formalName}
          onChange={e => onChange('formalName', e.target.value)}
        />
      </div>
      <div>
        <label className="dib">Short Description: </label>
        <input
          type="text"
          value={shortDesc}
          onChange={e => onChange('shortDesc', e.target.value)}
        />
      </div>
      <div>
        <label className="dib">Purpose: </label>
        <input
          type="text"
          value={purpose}
          onChange={e => onChange('purpose', e.target.value)}
        />
      </div>
      <div>
        <label className="dib">Primary Phone: </label>
        <input
          type="text"
          value={primaryPhone}
          onChange={e => onChange('primaryPhone', e.target.value)}
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

export default Form
