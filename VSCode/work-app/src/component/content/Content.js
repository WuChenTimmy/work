import React, { Component } from 'react'
import FruitContent from './FruitContent'
import FastContent from './FastContent'
import FoodContent from './FoodContent'

export default class Content extends Component {
  render() {
    return (
        <div className="container">
            <div className="card text-center">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs  nav-fill" id="nav-tab" role="tablist">
                    <li className="nav-item">
                        <p className="nav-link active" id="nav-fruit-tab" data-bs-toggle="tab" data-bs-target="#nav-fruit" type="button" role="tab" aria-controls="nav-fruit" aria-selected="true">水果</p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link" id="nav-fast-tab" data-bs-toggle="tab" data-bs-target="#nav-fast" type="button" role="tab" aria-controls="nav-fast" aria-selected="false">速食</p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link" id="nav-food-tab" data-bs-toggle="tab" data-bs-target="#nav-food" type="button" role="tab" aria-controls="nav-food" aria-selected="false">熟食</p>
                    </li>
                    </ul>
                </div>
                <div className="card-body">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-fruit" role="tabpanel" aria-labelledby="nav-fruit-tab">
                            <p className="card-title fs-4 fw-normal mt-2">新鮮水果精選</p>
                            <p className="card-text mb-4">我們提供的新鮮水果是從世界各地精心挑選而來的頂級水果，每一種水果都擁有獨特的外觀、口感和風味，為您帶來豐富的口味享受和營養均衡。</p>
                            <p><FruitContent/></p>
                        </div>
                        <div className="tab-pane fade" id="nav-fast" role="tabpanel" aria-labelledby="nav-fast-tab">
                            <p className="card-title fs-4 fw-normal mt-2">新鮮水果精選</p>
                            <p className="card-text mb-4">我們提供的新鮮水果是從世界各地精心挑選而來的頂級水果，每一種水果都擁有獨特的外觀、口感和風味，為您帶來豐富的口味享受和營養均衡。</p>
                            <p><FastContent/></p>
                        </div>
                        <div className="tab-pane fade" id="nav-food" role="tabpanel" aria-labelledby="nav-food-tab">
                            <p className="card-title fs-4 fw-normal mt-2">新鮮水果精選</p>
                            <p className="card-text mb-4">我們提供的新鮮水果是從世界各地精心挑選而來的頂級水果，每一種水果都擁有獨特的外觀、口感和風味，為您帶來豐富的口味享受和營養均衡。</p>
                            <p><FoodContent/></p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
