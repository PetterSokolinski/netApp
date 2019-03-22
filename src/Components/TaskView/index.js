import React from 'react'
import { Grid } from 'semantic-ui-react'
import styled from 'styled-components'
import GridColumn from '../GridColumn'

const Container = styled.div`
    padding: 75px;
`


class GridView extends React.Component {
    render() {
        const { object1, object2 } = this.props
        return (
            <Container>
                <Grid stackable divided>
                    <GridRow object1={object1} object2={object2} />
                </Grid>
            </Container>
        )
    }
}


const GridRow = (props) => (
    <Grid.Row>
        <GridColumn object={props.object1}/>
        <GridColumn object={props.object2}/>
    </Grid.Row>
)




export default GridView