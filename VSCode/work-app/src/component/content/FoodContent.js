import React, { Component } from 'react'

export default class FoodContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 用於存儲可選擇的水果數量
            quantities: Array(10).fill(0), // 初始化為0，可選擇的數量為0到10
            // 用於存儲用戶選擇的水果數量
            selectedQuantities: Array(10).fill(0), // 用於存儲用戶選擇的數量
            fruits: [
                { name: '草莓', description: '採自高山溫帶氣候下的優質農田，以嚴格的管理和採收方式確保了每顆草莓都保持著鮮美的品質。' },
                { name: '鳳梨', description: '源自熱帶氣候下的優質農田，是一種具有豐富風味和營養的水果。' },
                { name: '芒果', description: '源自於熱帶氣候下的優質農田，是一種具有豐富風味和營養的水果。' },
                { name: '西瓜', description: '來自於陽光充足的農田，經過精心栽培和選擇，保證每一顆都是最佳品質。' },
                { name: '葡萄柚', description: '來自陽光充足的果園，以嚴格的質量標準種植和採摘，確保每一個葡萄柚都是最佳品質。' },
                { name: '柳丁', description: '來自溫暖的亞熱帶地區，以優質的品質和豐富的口感而聞名。' },
                { name: '綠皮檸檬', description: '來自熱帶氣候地區的優質水果，以其酸爽清新的口感和多用途的特性而受到喜愛。' },
                { name: '黃皮檸檬', description: '來自熱帶氣候地區的上乘水果，以其酸爽甜美的口感和豐富的營養成分而受到廣泛歡迎。' },
                { name: '綠奇異果', description: '來自溫暖氣候地區的上等水果，以其外表光滑、果肉多汁和營養豐富而受到廣泛歡迎。' },
                { name: '黃金奇異果', description: '從阿根廷、紐西蘭等地嚴選而來的頂級水果，以其獨特的外表、濕潤的果肉和豐富的風味而聞名。' }
            ]
        };
    }
    // 增加水果數量的方法
    handleIncrement = (index) => {
        const { selectedQuantities } = this.state;
        const updatedQuantities = [...selectedQuantities];
        updatedQuantities[index] = selectedQuantities[index] + 1;
        this.setState({ selectedQuantities: updatedQuantities });
    };
    // 處理減少水果數量的方法
    handleDecrement = (index) => {
        const { selectedQuantities } = this.state;
        const updatedQuantities = [...selectedQuantities];
        if (selectedQuantities[index] > 0) {
            updatedQuantities[index] = selectedQuantities[index] - 1;
            this.setState({ selectedQuantities: updatedQuantities });
        }
    };

    render() {
        const { selectedQuantities, fruits } = this.state;

        const cards = fruits.map((fruit, index) => (
            <div className="col" key={index}>
                <div className="card h-100">
                    {/* 卡片頂端圖片 */}
                    <img src={`images/fruit/fruit_${index + 1 < 10 ? '0' : ''}${index + 1}.jpg`} className="card-img-top" alt={fruit.name}></img>
                    <div className="card-body">
                        <h5 className="card-title">{fruit.name}</h5>
                        <p className="card-text">{fruit.description}</p>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => this.handleDecrement(index)}>-</button>
                                <span className="mx-2">{selectedQuantities[index]}</span>
                                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => this.handleIncrement(index)}>+</button>
                            </div>
                            <button type="button" className="btn btn-outline-success btn">加入購物車</button>
                        </div>
                    </div>
                </div>
            </div>
        ));

        return (
            <div>
                {/* 卡片群組 RWD x,y間距2 */}
                <div className="row row-cols-2 row-cols-md-4 gx-2 gy-2">
                    {cards}
                </div>
            </div>
        );
    }
}
