import React from "react"

const PlaydohItem = ({ img, name, price, amount, amountPlus, amountMinus }) => {
  return (
    <div className="playdohItem">
      <div>
        <img src={img} alt="playdoh" className="pic" />
        <div>
          {name} ${price}
        </div>
      </div>
      <div className="amountCtrl">
        <div onClick={amountPlus} className="plus">
          +
        </div>
        <div className="amount">{amount}</div>
        <div onClick={amountMinus} className="minus">
          -
        </div>
      </div>
    </div>
  )
}

export default PlaydohItem
