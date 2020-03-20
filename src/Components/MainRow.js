import React,{Component} from 'react'
import {Card,CardImg,CardImgOverlay, CardTitle, CardBody,CardText} from 'reactstrap';


class MainRow extends Component {
    render(){
        return (
            <div className="">
               <div className="row">
               <div className='col-3 col-md-1 m-2'>
                    <Card>
                        <CardBody>
                            <CardTitle>DEL</CardTitle>
                            <CardText>918</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className='col-3 col-md-1 m-2'>
                    <Card>
                        <CardBody>
                            <CardTitle>INT</CardTitle>
                            <CardText>234</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className='col-3 col-md-1 m-2'>
                    <Card>
                        <CardBody>
                            <CardTitle>OOD</CardTitle>
                            <CardText>447</CardText>
                        </CardBody>
                    </Card>
               
                </div>
                </div> 
                
            </div>
                
        )
    }
}

export default MainRow