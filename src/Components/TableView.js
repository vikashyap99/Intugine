import React,{Component} from 'react'
import {Card,CardImg,CardImgOverlay, CardTitle, CardBody,CardText, Button, CardHeader} from 'reactstrap';



class TableView extends Component {

    state ={
        data: this.props.data
    }

    console = () => {
        const a = this.state.data.map(x => {
           return(
               <div>
                   <ul>{x["awbno"]}</ul>
                    <ul>{x["carrier"]}</ul>
               </div>
           )
        })
        
    }

    render(){

        const a = this.state.data.map(x => {
            return(
                <div class='row p-2'>
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
                    <ul>{}
                    <p>
                        &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'numeric',
                            day: '2-digit'
                        }).format(new Date(x["extra_fields"]["expected_delivery_date"]))}</p>
                        </ul>
                    <ul>{x["current_status"]}</ul>
                </div>
            )
         })

        return(
            <div>
                <div className='col-9 mt-1'>
                    <Card>
                        <CardHeader>
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