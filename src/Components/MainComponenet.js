import React,{Component} from 'react'
import {Card,CardImg,CardImgOverlay, CardTitle, CardBody,CardText, Button} from 'reactstrap';
import MainRow from './MainRow'
import {DATA} from './data'
import TableView from './TableView'
import TimelineView from './TimelineView'



class Main extends Component {

    state = {
        data: DATA
    }
    console = () => {
        console.log(typeof(this.state.data))
    }
    render(){
        return (
            <div className="">
               <MainRow />
                <Button onClick={this.console}>Click</Button>
                <TableView  data = {this.state.data}/>
                <TimelineView />
            </div>
                
        )
    }
}

export default Main