import React, { Component } from 'react';
import Trash from './fontAwesome/trash';
import Edit from './fontAwesome/edit';


class Tr extends Component {
    render() {
        const {prop} = this.props;
        return (
            <tr>
                <td>{prop.id}</td>
                <td>{prop.name}</td>
                <td>{prop.lastName}</td>
                <td>{prop.phone}</td>
                <td>{prop.email}</td>
                <td>{prop.address}</td>
                <td>{prop.birthday}</td>
                <td>{prop.details}</td>
                <td><button className="btn btn-danger mx-1"><Trash /></button>
                <button className="btn btn-primary mx-1"><Edit /></button></td>
            </tr>
        );
    }
}

export default Tr;