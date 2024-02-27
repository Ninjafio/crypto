import React from 'react'
import "./Timer.css"

const Timer = () => {

  return (
    <div className='timer'>
        <p className='timer-title'>
            Auction ends in:
        </p>
        <ul className='timer-list'>
            <li>
                <div className='timer-item'>
                    <div>
                        <p className='timer-num'>
                            59 :
                        </p>
                        <p className='timer-str'>
                            Hours
                        </p>
                    </div>
                </div> 
            </li>
            <li className='timer-item-li'>
                <div className='timer-item'>
                    <div>
                        <p className='timer-num'>
                            59 :
                        </p>
                        <p className='timer-str'>
                            Minutes
                        </p>
                    </div>
                </div> 
            </li>
            <li className='timer-item-li'>
                <div className='timer-item'>
                    <div>
                        <p className='timer-num'>
                            59
                        </p>
                        <p className='timer-str'>
                            Seconds
                        </p>
                    </div>
                </div> 
            </li>
        </ul>
    </div>
  )
}

export default Timer