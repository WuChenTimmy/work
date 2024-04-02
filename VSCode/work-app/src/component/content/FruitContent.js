import React, { Component } from 'react';

export default class FruitContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits: []
        };
    }

    componentDidMount() {
        this.fetchFruits();
    }

    fetchFruits() {
        fetch("/product/getAll") // 假設後端 API 的端點為 '/api/products'
            .then(response => response.json())
            .then(data => {
                this.setState({ fruits: data });
            })
            .catch(error => console.error('Error fetching fruits:', error));
    }

    render() {
        const { fruits } = this.state;

        const cards = fruits.map((fruit, index) => (
            <div className="col" key={index}>
                <div className="card h-100">
                    <img src={fruit.image} className="card-img-top" alt={fruit.name}></img>
                    <div className="card-body">
                        <h5 className="card-title">{fruit.name}</h5>
                        <p className="card-text">{fruit.description}</p>
                    </div>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                        <span className="card-text mx-2"><h5>NT{fruit.price}</h5></span>
                        <button type="button" className="btn btn-outline-success btn">加入購物車</button>
                    </div>
                </div>
            </div>
        ));

        return (
            <div>
                <div className="row row-cols-2 row-cols-md-4 gx-2 gy-2">
                    {cards}
                </div>
            </div>
        );
    }
}
