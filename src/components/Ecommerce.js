import React, { Component } from "react"
import PlaydohItem from "../components/PlaydohItem"
import pd1 from "../images/pd1.jpg"
import pd2 from "../images/pd2.jpg"
import pd3 from "../images/pd3.jpg"
import pd4 from "../images/pd4.jpg"

export default class Ecommerce extends Component {
  state = {
    item1: 0,
    item2: 0,
    item3: 0,
    item4: 0,
  }
  amountPlus1 = () => {
    this.setState({ item1: this.state.item1 + 1 })
  }

  amountPlus2 = () => {
    this.setState({ item2: this.state.item2 + 1 })
  }

  amountPlus3 = () => {
    this.setState({ item3: this.state.item3 + 1 })
  }

  amountPlus4 = () => {
    this.setState({ item4: this.state.item4 + 1 })
  }

  amountMinus1 = () => {
    this.setState({ item1: this.state.item1 - 1 })
    if (this.state.item1 <= 0) {
      this.setState({ item1: 0 })
    }
  }

  amountMinus2 = () => {
    this.setState({ item2: this.state.item2 - 1 })
    if (this.state.item2 <= 0) {
      this.setState({ item2: 0 })
    }
  }

  amountMinus3 = () => {
    this.setState({ item3: this.state.item3 - 1 })
    if (this.state.item3 <= 0) {
      this.setState({ item3: 0 })
    }
  }

  amountMinus4 = () => {
    this.setState({ item4: this.state.item4 - 1 })
    if (this.state.item4 <= 0) {
      this.setState({ item4: 0 })
    }
  }
  render() {
    const total =
      this.state.item1 * 1.5 +
      this.state.item2 * 2 +
      this.state.item3 * 2.5 +
      this.state.item4 * 2
    return (
      <React.Fragment>
        <div className="playdoh">
          <PlaydohItem
            img={pd1}
            name="Cans Modeling Doughs"
            price={1.5}
            amount={this.state.item1}
            amountPlus={this.amountPlus1}
            amountMinus={this.amountMinus1}
          />
          <PlaydohItem
            img={pd2}
            name="Super Colour Pack"
            price={2}
            amount={this.state.item2}
            amountPlus={this.amountPlus2}
            amountMinus={this.amountMinus2}
          />
          <PlaydohItem
            img={pd3}
            name="Doh PAW PATROL"
            price={2.5}
            amount={this.state.item3}
            amountPlus={this.amountPlus3}
            amountMinus={this.amountMinus3}
          />
          <PlaydohItem
            img={pd4}
            name="Doh Fun Factory"
            price={2}
            amount={this.state.item4}
            amountPlus={this.amountPlus4}
            amountMinus={this.amountMinus4}
          />
        </div>
        <hr />
        <div className="total">Total:${total}</div>
      </React.Fragment>
    )
  }
}
