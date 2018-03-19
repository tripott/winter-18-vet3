import React from 'react'
import Form from '../../components/Form'
import { connect } from 'react-redux'
import { addResource, chgResource } from '../../action-creators/resources'

const NewResource = props => {
  console.log('NewResource props', props)
  return (
    <div>
      <h1>Add Resource</h1>
      <Form
        cancelUrl="/resources"
        onChange={props.onChange}
        onSubmit={e => props.onSubmit(props.history, props.currentResource)}
        {...props.currentResource}
      />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    currentResource: state.currentResource
  }
}

function mapActionsToProps(dispatch) {
  return {
    onChange: (field, value) => dispatch(chgResource(field, value)),
    onSubmit: (history, currentResource) => e => {
      e.preventDefault()
      dispatch(addResource(currentResource, history))
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(NewResource)
