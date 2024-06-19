// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {each, onClickStarBtn} = props
  const {name, date, id, isStarred} = each

  const res = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const starBtn = () => {
    onClickStarBtn(id)
  }

  return (
    <li className="li-con">
      <div className="name-date-con">
        <h1 className="name-item">{name}</h1>
        <p className="date-item">{date}</p>
      </div>

      <button
        className="star-btn"
        data-testid="button"
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
