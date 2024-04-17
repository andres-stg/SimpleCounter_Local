import React from 'react'

const Counter = (props) => {

  return (
    <div className="SimpleCounter">

        <div className="ClockLooks">
        <i className="far fa-clock"></i>
        </div>
        <div className="SixthDigit">{props.SixthDigit}</div>
        <div className="FifthDigit">{props.FifthDigit}</div>
        <div className="FourthDigit">{props.FourthDigit}</div>
        <div className="ThirdDigit">{props.ThirdDigit}</div>
        <div className="SecondDigit">{props.SecondDigit}</div>
        <div className="FirstDigit">{props.FirstDigit}</div>

    </div>
  )
}


export default Counter