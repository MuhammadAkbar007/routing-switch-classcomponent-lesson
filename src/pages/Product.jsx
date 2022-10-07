import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Product extends Component {

    state = {
        cars: [
            {id: 1, name: 'Malibu', color: 'black', year: '2020'},
            {id: 2, name: 'Captiva', color: 'green', year: '2017'},
            {id: 3, name: 'Spark', color: 'orange', year: '2021'},
            {id: 4, name: 'Nexia 3', color: 'white', year: '2018'},
            {id: 5, name: 'Tracker', color: 'pink', year: '2020'},
            {id: 6, name: 'Gentra', color: 'red', year: '2016'},
            {id: 7, name: 'Lacetti', color: 'scarlet', year: '2019'}
        ]
    }

    render() {
        return (
            <div>
                <div className="container mt-5">
                    <table className={'table table-dark table-striped table-hover table-bordered text-center'}>
                        <thead>
                        <tr>
                            <th>N</th>
                            <th>Name</th>
                            <th>Color</th>
                            <th>Year</th>
                            <th>Info</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.cars.map((item) =>
                            <tr key={item.id} style={{cursor: 'pointer'}}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.color}</td>
                                <td>{item.year}</td>
                                <td><Link to={'/product/' + item.id}>
                                    <button className={'btn btn-info text-white'}>i</button>
                                </Link></td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Product;