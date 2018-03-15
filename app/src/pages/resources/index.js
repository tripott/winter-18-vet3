import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'
import ResourceListItem from '../../components/ResourceListItem'

const Resources = props => {
  return (
    <div>
      <h1>Resources</h1>
      <div>
        <ol>{map(r => <ResourceListItem resource={r} />, props.resources)}</ol>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    resources: state.resources
  }
}

const connector = connect(mapStateToProps)

export default connector(Resources)
