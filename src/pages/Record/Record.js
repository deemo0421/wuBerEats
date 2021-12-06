import React from 'react'
import Navbar from '../../components/Navbar'
import RecordItem from './component/Record_Item';
import {Link} from 'react-router-dom';
export default function Record() {
    return (
        <>
             <Navbar />
             <div className="container cartkv">
                <div className="row">
                    <div className="col-3 col-lg-1 backtoshop">
                        <Link to="/Homepage" style={{textDecoration:null,color:'black'}}><i className="fas fa-arrow-left"></i>Back</Link>
                    </div>
                        <div className="col">
                            <h5 style={{textAlign:'center'}}>Shopping Record</h5>
                        </div>
                    <hr />
                    <RecordItem/>
                </div>
            </div>
        </>
    )
}