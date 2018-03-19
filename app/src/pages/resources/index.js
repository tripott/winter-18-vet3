import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'
import ResourceListItem from '../../components/ResourceListItem'
import List from 'material-ui/List'
import withDrawer from '../../components/Drawer'
import MenuAppBar from '../../components/MenuAppBar'

const Resources = props => {
  return (
    <div>
      <MenuAppBar title="Resources" />
      <div style={{ marginTop: '44px' }}>
        <List>
          {map(r => <ResourceListItem resource={r} />, props.resources)}
        </List>
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

export default withDrawer(connector(Resources))
