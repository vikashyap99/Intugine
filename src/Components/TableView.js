import React,{Component} from 'react'
import {Card, CardBody,CardHeader, Button} from 'reactstrap';



class TableView extends Component {

    state ={
        data: this.props.data
    }

    check =  () => {
        console.log(this.props.data,"check")
    }

    render(){
        console.log(this.state.data,"table-view")
        let a
        let date
        if(this.props.data !== null){
            //console.log(this.state.data)
         a = this.props.data.map(x => {
             //console.log(x)
             if(x["extra_fields"] === undefined){
                date = "01/01/01"
             }
             else{
                 date = x["extra_fields"]["expected_delivery_date"]
             }
            return(
                <div className=' mt-1 p-2 bg-info'>
                    
                    <Card class="navbar ">
                        <CardBody>
                        <div class='row pl-1'>
                    <ul>{x["awbno"]}</ul>
                     <ul>{x["carrier"]}</ul>
                    <ul>{x["from"]}</ul>
                    <ul>{x["to"]}</ul>
                    <ul>{x["carrier"]}</ul>
                    <ul><p>
                        &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'numeric',
                            day: '2-digit'
                        }).format(new Date(x["pickup_date"]))}</p></ul>
                    <ul>
                    <p>
                        &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'numeric',
                            day: '2-digit'
                        }).format(new Date(date))}</p>
                        </ul>
                    <ul>{x["current_status"]}</ul>
                    </div>
                    </CardBody>
                    </Card>
                </div>
            )
         })}

        return(
            <div>
                <div className='col-9 mt-1 bg-secondary'>
                    <Card className=''>
                        <CardHeader className='bg-secondary'>
                            <div class='row pl-1'>
                                <ul>AWB number</ul>
                                <ul class='pl-4'>Transporter</ul>
                                <ul>Source</ul>
                                <ul>Destination</ul>
                                <ul class='pl-5'>Brand</ul>
                                <ul></ul>
                                <ul class='pl-5'>Star Date</ul>
                                <ul class='pl-5'>ETA</ul>
                                <ul></ul>
                                <ul>Status</ul>
                            </div>
                        </CardHeader>
                        {/* <Button onClick={this.check}>Press</Button> */}
                        <CardBody>
                        {a}
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}

export default TableView