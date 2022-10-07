import React, {Component} from 'react';
import {Link} from "react-router-dom";

class OneProduct extends Component {

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

        let temp = ''

        this.state.cars.map((item) => {
            if (this.props.match.params.id == item.id) {
                temp = item;
                return temp;
            }
            return temp;
        })

        return (
            <div>
                {temp ?
                    <div className="container mt-5">
                        <div className="col-md-3 text-center">
                            <div className="card bg-dark text-white p-3">
                                <h1>Name: {temp.name}</h1>
                                <h3>Color: {temp.color}</h3>
                                <h3>Year: {temp.year}</h3>
                                <Link to={'/product/' + temp.id + '/settings/details'}>
                                    <button className={'btn btn-secondary'}>Settings Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    : ''}
            </div>
        );
    }
}

export default OneProduct;