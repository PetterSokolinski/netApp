import React from 'react'
import { Grid } from 'semantic-ui-react'
import styled from 'styled-components'
import GridColumn from '../GridColumn'

const Container = styled.div`
    padding: 50px 80px;
`


class GridView extends React.Component {
    render() {
        const { object1, object2, projectOptions } = this.props
        return (
            <Container>
                <Grid stackable divided>
                    <GridRow object1={object1} object2={object2} projectOptions={projectOptions} />
                </Grid>
            </Container>
        )
    }
}


const GridRow = (props) => (
    <Grid.Row>
        <GridColumn object={props.object1} projectOptions={props.projectOptions}/>
        <GridColumn object={props.object2} projectOptions={props.projectOptions}/>
    </Grid.Row>
)




export default GridView