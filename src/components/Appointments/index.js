// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    appointmentList: [],
    savedList: [],
    name: '',
    date: '',
    starred: false,
  }

  onChangeText = event => {
    this.setState({name: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {name, date} = this.state
    const newObj = {id: uuidv4(), name, date, isStarred: false}
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newObj],
      savedList: [...prevState.appointmentList, newObj],
    }))
  }

  onClickStarBtn = id => {
    this.setState(prevState => ({
      appointmentList: [
        ...prevState.appointmentList.map(each =>
          id === each.id ? {...each, isStarred: !each.isStarred} : each,
        ),
      ],
    }))
  }

  onClickStarredBtn = () => {
    this.setState(prevState => ({
      appointmentList: [
        ...prevState.appointmentList.filter(each => each.isStarred),
      ],
      starred: !prevState.starred,
    }))
  }

  render() {
    const {appointmentList, savedList, starred} = this.state
    const btnRes = starred ? 'starred-btn' : 'unstarred-btn'
    const listItems = starred ? appointmentList : savedList
    console.log(appointmentList)
    return (
      <div className="bg-container">
        <div className="main-container">
          <div className="form-img-con">
            <div className="form-heading-con">
              <h1 className="add-appointment-heading">Add Appointment</h1>
              <form onSubmit={this.onSubmitForm} className="form">
                <label htmlFor="title" className="label">
                  Title
                </label>
                <br />
                <input
                  id="title"
                  type="text"
                  className="input"
                  placeholder="Title"
                  onChange={this.onChangeText}
                />
                <br />
                <label htmlFor="date" className="label">
                  DATE
                </label>
                <br />
                <input
                  id="date"
                  type="date"
                  className="input"
                  onChange={this.onChangeDate}
                  placeholder=""
                />
                <br />
                <button
                  onClick={this.onClickAdd}
                  type="submit"
                  className="add-btn"
                >
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="appointments-img"
            />
          </div>
          <hr />
          <div className="btn-appt-con">
            <h1>Appointments</h1>
            <button
              className={btnRes}
              type="button"
              onClick={this.onClickStarredBtn}
            >
              Starred
            </button>
          </div>
          <ul className="ul-con">
            {listItems.map(each => (
              <AppointmentItem
                each={each}
                key={each.id}
                onClickStarBtn={this.onClickStarBtn}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
