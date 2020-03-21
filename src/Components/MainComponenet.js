import React,{Component} from 'react'
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
                
                {/* <TableView  data = {this.state.data}/> */}
                <TimelineView />
            </div>
                
        )
    }
}

export default Main