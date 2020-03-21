import React,{Component} from 'react'
import {Card, CardTitle, CardBody,CardText, Button} from 'reactstrap';
import TableView from './TableView'
import {DATA} from './data'
 

class MainRow extends Component {

    state = {
        data: DATA,

        DEL_count: 0,
        INT_count: 0,
        OOD_count: 0,
        DEX_count: 0,
        NFI_count: 0,

        DEL_list: [],
        INT_list: [],
        OOD_list: [],
        DEX_list: [],
        NFI_list: [],

        tableView: null,
        table: null,
        

    }
    

    componentDidMount= () => {
        let DEL_count =  0
        let INT_count =  0
        let OOD_count =  0
        let DEX_count =  0
        let NFI_count =  0
        const a = this.state.data.map(x => {
            
            if(x["current_status_code"] === "DEL")
                DEL_count += 1
            if(x["current_status_code"] === "INT")
                INT_count += 1
            if(x["current_status_code"] === "OOD")
                OOD_count += 1
            if(x["current_status_code"] === "DEX")
                DEX_count += 1
            if(x["current_status_code"] === "NFI")
                NFI_count += 1

            
        })
        this.setState({DEL_count: DEL_count})
        this.setState({INT_count: INT_count})
        this.setState({OOD_count: OOD_count})
        this.setState({DEX_count: DEX_count})
        this.setState({NFI_count: NFI_count})

        const DEL_list =  []
        const INT_list =  []
        const OOD_list =  []
        const DEX_list =  []
        const NFI_list =  []

        const aa = this.state.data.map(x => {
            if(x["current_status_code"] === "DEL")
                DEL_list.push(x)
            if(x["current_status_code"] === "INT")
                INT_list.push(x)
            if(x["current_status_code"] === "NFI")
                NFI_list.push(x)
            if(x["current_status_code"] === "OOD")
                OOD_list.push(x)
            if(x["current_status_code"] === "DEX")
                DEX_list.push(x)
                 
        })
        this.setState({DEL_list: [...DEL_list]})
        this.setState({INT_list: [...INT_list]})
        this.setState({OOD_list: [...OOD_list]})
        this.setState({DEX_list: [...DEX_list]})
        this.setState({NFI_list: [...NFI_list]})
    }

    tableHandler = (status_code) => {
       //console.log(status_code,typeof(status_code))
        if(status_code === "DEX")
            this.setState({table: [...this.state.DEX_list]})
        if(status_code === "INT")
            this.setState({table: [...this.state.INT_list]})
        if(status_code === "OOD")
            this.setState({table: [...this.state.OOD_list]})
        if(status_code === "DEL")
            this.setState({table: [...this.state.DEL_list]})
        if(status_code === "NFI")
            this.setState({table: [...this.state.NFI_list]})

       // console.log(this.state.table)
    //    const table = <TableView data={this.state.table} />
    //    this.setState({tableView: table})
    }

    render(){
        //console.log(this.state.table)
        let table = <TableView data={this.state.table} />
        //console.log(table)
        //console.log(this.state.DEL_list,this.state.INT_list,this.state.OOD_list,this.state.DEX_list,this.state.NFI_list)


        return (
            <div className="">
               <div className="row ml-5 p-auto ">
               <div className='col-3 col-md-1 m-4  ' >
                   <Card className='bg-primary text-white ' onClick={() => this.tableHandler("DEL")}>
                        <CardBody >
                            <CardTitle><b>DEL</b></CardTitle>
                            <CardText>{this.state.DEL_count}</CardText>
                        </CardBody>
                    </Card>
                    
                </div>
                <div className='col-3 col-md-1 m-4' >
                    <Card className='bg-primary text-white 'onClick={() => this.tableHandler("INT")} >
                        <CardBody>
                            <CardTitle><b>INT</b></CardTitle>
                            <CardText >{this.state.INT_count}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className='col-3 col-md-1 m-4'>
                    <Card className='bg-primary text-white'  onClick={() => this.tableHandler("OOD")}>
                        <CardBody>
                            <CardTitle><b>OOD</b></CardTitle>
                            <CardText>{this.state.OOD_count}</CardText>
                        </CardBody>
                    </Card>
               
                </div>
                <div className='col-3 col-md-1 m-4'>
                    <Card  className='bg-primary text-white' onClick={() => this.tableHandler("DEX")}>
                        <CardBody>
                            <CardTitle><b>DEX</b></CardTitle>
                            <CardText>{this.state.DEX_count}</CardText>
                        </CardBody>
                    </Card>
               
                </div>
                <div className='col-3 col-md-1 m-4'>
                    <Card className='bg-primary text-white'  onClick={() => this.tableHandler("NFI")}>
                        <CardBody>
                            <CardTitle><b>NFI</b></CardTitle>
                            <CardText>{this.state.NFI_count}</CardText>
                        </CardBody>
                    </Card>
               
                </div>
                </div> 
                
                {table}
            </div>
                
        )
    }
}

export default MainRow