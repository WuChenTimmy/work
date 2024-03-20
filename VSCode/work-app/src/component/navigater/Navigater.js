import React, { Component } from 'react'

export default class navigater extends Component {
  render() {
    return (
        // 輪播組件 自動撥放
        <div className="container">
            <div id="demo" className="carousel carousel-dark slide mb-4" data-bs-ride="carousel">
                {/* 指示符 */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="6" aria-label="Slide 7"></button>
                </div>
                {/* 輪播圖片 */}
                <div className="carousel-inner">
                    {/* 當前輪播圖片 */}
                    <div className="carousel-item active" data-bs-interval="3000">
                        <img src="images/carousel/01.jpg" className="d-block w-100" alt="01"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src="images/carousel/02.jpg" className="d-block w-100" alt="02"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src="images/carousel/03.jpg" className="d-block w-100" alt="03"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src="images/carousel/04.jpg" className="d-block w-100" alt="04"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src="images/carousel/05.jpg" className="d-block w-100" alt="04"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src="images/carousel/06.jpg" className="d-block w-100" alt="04"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src="images/carousel/07.jpg" className="d-block w-100" alt="04"/>
                    </div>
                </div>
                {/* 切換鍵 */}
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
  }
}
