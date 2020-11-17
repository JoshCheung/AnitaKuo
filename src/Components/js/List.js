import {Table} from 'reactstrap';
import React, { Component } from "react";
import { Scrollbars } from 'react-custom-scrollbars';


class List extends Component {
    constructor (props) {
        super(props);
        this.state = {
        }
    }


    
    render() {
        return (
            <div style={{height: '90%', paddingLeft: "10px", overflowX: "hidden", overflowY: "auto"}}>
                <Scrollbars style={{height: '100%'}}>
                    <Table borderless id="roomList">
                        <tbody>
                        {
                        this.props.list.map((item, index) =>
                            <tr key={index} >
                                <td style={{height: 45, fontSize: "2vh", textAlign: "left"}}>
                                    <div className="text" style={{color: "#424954"}}>{item}</div>
                                </td>
                            </tr>
                            )
                        }
                        </tbody>
                    </Table>
                </Scrollbars>
            </div>
        );
    }
}

export default List;
