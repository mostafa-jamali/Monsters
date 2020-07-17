import React, { Component } from 'react';
import Tr from '../trTable/Tr'
import '../Table/table.css'
class Table extends Component {

    state={
        trTable:[
            {id:1, name:"ali", lastName:"komijani", phone:"09014356218", email:"ali@gmail.com", address:"komijan", birthday:"1375", details:"-", action:""},
            {id:2, name:"mohammad", lastName:"khorrami", phone:"09114356218", email:"mohammad@gmail.com", address:"arak", birthday:"1346", details:"-", action:""},
            {id:3, name:"reza", lastName:"hatami", phone:"09124356218", email:"reza@gmail.com", address:"tehran", birthday:"1345", details:"-", action:""},
            {id:4, name:"mahdi", lastName:"sadeghi", phone:"09134356218", email:"sadeghi@gmail.com", address:"esfahan", birthday:"1388", details:"-", action:""},
            {id:5, name:"hasan", lastName:"mohammadi", phone:"09224356218", email:"hasan@gmail.com", address:"kerman", birthday:"1366", details:"-", action:""},
            {id:6, name:"amir", lastName:"sharifi", phone:"09354356218", email:"sharifi@gmail.com", address:"azna", birthday:"1359", details:"-", action:""},
            {id:7, name:"amirali", lastName:"ansari", phone:"09356356218", email:"ansari@gmail.com", address:"karaj", birthday:"1374", details:"-", action:""},
            {id:8, name:"mehran", lastName:"mansoori", phone:"09164356218", email:"mehran@gmail.com", address:"shiraz", birthday:"1375", details:"-", action:""},
        ],
        search:"",
    };
    chengeHandler= (event)=>{
        const {name, value} = event.target;
        this.setState({[name]: value});
        console.log(value);
    };
    render() {
        const {trTable, search} = this.state;
        let newTr = trTable.filter(item=> (
            item.name.toLowerCase().startsWith(search.toLowerCase()) ||
            item.phone.startsWith(search)
        ))

        return (
            <div className="tableContainer">
                <div className="col-6 bg-info rounded-lg py-2 my-2">
                    <label>search:</label>
                    <input className="rounded border-0 mx-2 input" name={'search'} onChange={this.chengeHandler} value={search}/>
                    <i className='fa fa-search'/>
                </div>
                <table className="table table-striped table-hover border">
                    <thead className="thead-dark">
                        <tr>
                            <th>#</th>
                            <th>name</th>
                            <th>last name</th>
                            <th>phone</th>
                            <th>email</th>
                            <th>address</th>
                            <th>birthday</th>
                            <th>details</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {newTr.map((item) =>(
                            <Tr key={item.id} prop={item}/>
                        ))}
                    </tbody>
                </table> 
            </div>
        );
    }
}

export default Table;