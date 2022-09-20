import React, { Fragment, ReactFragment } from 'react'
import {Segment, Grid, Icon} from 'semantic-ui-react';

function SalonMenuItem({title}) {
  return (
    <Fragment>
      <Segment>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {title}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Fragment>
  )
}

export default SalonMenuItem