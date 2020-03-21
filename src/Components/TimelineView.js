import React,{Component} from 'react'
import { Card,CardBody, CardText } from 'reactstrap'


class Timeline extends Component{

    render(){
        let aa = null
        if (this.props.data !== undefined){
         aa = this.props.data.map(x => {
            return (
                <div>
                    <Card className='col-3 md-2'>
                    <CardBody>
                        <CardText>{x["status_detail"]}</CardText>
                        <CardText>{x["time"]}</CardText>
                    </CardBody>
                </Card>
                </div>
            )
        })
    }

        return(
            <div>
                {aa}
            </div>
        )
    }
}

export default Timeline