// Write your code here
import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {each, onClickStarBtn} = props
  const {name, date, id, isStarred} = each
  const dateAndTime = format(new Date(date), 'dd MMMM yyyy, EEEE')
  console.log(dateAndTime)

  const res = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const starBtn = () => {
    onClickStarBtn(id)
  }

  return (
    <li className="li-con">
      <div className="name-date-con">
        <p className="name-item">{name}</p>
        <p className="date-item">{`Date: ${dateAndTime}`}</p>
      </div>

      <button
        className="star-btn"
        data-testid="star"
        type="button"
        onClick={starBtn}
        alt=""
      >
        <img src={res} alt="star" className="star-img" />
      </button>
    </li>
  )
}

export default AppointmentItem
