import './App.css'
import Home from './pagesUser/home'
import Login from './pagesUser/login'
import Register from './pagesUser/register'
import VerifyTicket from './pagesUser/verifyticket'
import ContactUs from './pagesUser/contactus'
import HomeUser from './pagesUser/home-user'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { Component } from 'react'
import VerifyTicketUser from './pagesUser/verifyticket-user'
import ContactUsUser from './pagesUser/contactus-user'
import { withRouter } from 'react-router'
import DashboardUser from './pagesUser/dashboard-user'
import AdminLogin from './pagesAdmin/admin-login'
import HomeAdmin from './pagesAdmin/stations'
import TrainList from './pagesUser/trainlist'
import TrainListUser from './pagesUser/trainlist-user'
import TrainCoach from './pagesUser/traincoach'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = JSON.parse(window.localStorage.getItem('state')) || {
      passengerMail: "",
      passengerNid: 0,
      passengerName: "",
      passengerMobile: 0,
      passengerPassword: "",

      fromStationID: 0,
      toStationID: 0,
      fromStationPosition: 11,
      toStationPosition: 13,
      journeyDate: 0,
      classID: 0,
      noOfPassengers: 0,

      selectedTrainID: 1,
      selectedCoachID: 1,
      selectedSeats: [],

      adminID: 0,
    }

    this.setPassengerMail = this.setPassengerMail.bind(this);
    this.setPassengerNid = this.setPassengerNid.bind(this);
    this.setPassengerName = this.setPassengerName.bind(this);
    this.setPassengerMobile = this.setPassengerMobile.bind(this);
    this.setPassengerPassword = this.setPassengerPassword.bind(this);


    this.setFromStationID = this.setFromStationID.bind(this);
    this.setToStationID = this.setToStationID.bind(this);
    this.setFromStationPosition = this.setFromStationPosition.bind(this);
    this.setToStationPosition = this.setToStationPosition.bind(this);
    this.setJourneyDate = this.setJourneyDate.bind(this);
    this.setClassID = this.setClassID.bind(this);
    this.setNoOfPassengers = this.setNoOfPassengers.bind(this);

    this.setSelectedTrainID = this.setSelectedTrainID.bind(this);
    this.setSelectedCoachID = this.setSelectedCoachID.bind(this);
    this.setSelectedSeats = this.setSelectedSeats.bind(this);

    this.setAdminID = this.setAdminID.bind(this);

  }

  setState(state) {
    window.localStorage.setItem('state', JSON.stringify(state));
    super.setState(state);
  }

  setPassengerMail(data) {
    return this.setState({
      ...this.state,
      passengerMail: data,
    });
  }

  setPassengerNid(data) {
    return this.setState({
      ...this.state,
      passengerNid: data,
    });
  }

  setPassengerName(data) {
    return this.setState({
      ...this.state,
      passengerName: data,
    });
  }

  setPassengerMobile(data) {
    return this.setState({
      ...this.state,
      passengerMobile: data,
    });
  }

  setPassengerPassword(data) {
    return this.setState({
      ...this.state,
      passengerPassword: data,
    });
  }




  setFromStationID(data) {
    return this.setState({
      ...this.state,
      fromStationID: data,
    });
  }

  setToStationID(data) {
    return this.setState({
      ...this.state,
      toStationID: data,
    });
  }

  setFromStationPosition(data) {
    return this.setState({
      ...this.state,
      fromStationPosition: data,
    });
  }

  setToStationPosition(data) {
    return this.setState({
      ...this.state,
      toStationPosition: data,
    });
  }

  setJourneyDate(data) {
    return this.setState({
      ...this.state,
      journeyDate: data,
    });
  }

  setClassID(data) {
    return this.setState({
      ...this.state,
      classID: data,
    });
  }

  setNoOfPassengers(data) {
    return this.setState({
      ...this.state,
      noOfPassengers: data,
    });
  }



  setSelectedTrainID(data) {
    return this.setState({
      ...this.state,
      selectedTrainID: data,
    });
  }

  setSelectedCoachID(data) {
    return this.setState({
      ...this.state,
      selectedCoachID: data,
    });
  }

  setSelectedSeats(data) {
    return this.setState({
      ...this.state,
      selectedSeats: data,
    });
  }


  setAdminID(data) {
    return this.setState({
      ...this.state,
      adminID: data,
    });
  }




  render() {
    return (
      <Router>

        <Switch>

          <Route exact path='/'
            render={props => (
              <Home {...props}
                history={this.props.history}
                setPassengerMail={this.setPassengerMail}
                passengerMail={this.state.passengerMail}
                setFromStationID={this.setFromStationID}
                fromStationID={this.state.fromStationID}
                setToStationID={this.setToStationID}
                toStationID={this.state.toStationID}
                setFromStationPosition={this.setFromStationPosition}
                fromStationPosition={this.state.fromStationPosition}
                setToStationPosition={this.setToStationPosition}
                toStationPosition={this.state.toStationPosition}
                setJourneyDate={this.setJourneyDate}
                journeyDate={this.state.journeyDate}
                setClassID={this.setClassID}
                classID={this.state.classID}
                setNoOfPassengers={this.setNoOfPassengers}
                noOfPassengers={this.state.noOfPassengers}
                setSelectedTrainID={this.setSelectedTrainID}
                selectedTrainID={this.state.selectedTrainID}
              />
            )}
          />

          <Route exact path='/home'
            render={props => (
              <Home {...props}
                history={this.props.history}
                setPassengerMail={this.setPassengerMail}
                passengerMail={this.state.passengerMail}
                setFromStationID={this.setFromStationID}
                fromStationID={this.state.fromStationID}
                setToStationID={this.setToStationID}
                toStationID={this.state.toStationID}
                setFromStationPosition={this.setFromStationPosition}
                fromStationPosition={this.state.fromStationPosition}
                setToStationPosition={this.setToStationPosition}
                toStationPosition={this.state.toStationPosition}
                setJourneyDate={this.setJourneyDate}
                journeyDate={this.state.journeyDate}
                setClassID={this.setClassID}
                classID={this.state.classID}
                setNoOfPassengers={this.setNoOfPassengers}
                noOfPassengers={this.state.noOfPassengers}
                setSelectedTrainID={this.setSelectedTrainID}
                selectedTrainID={this.state.selectedTrainID}
              />
            )}
          />

          <Route exact path='/login'
            render={props => (
              <Login {...props}
                history={this.props.history}
                setPassengerMail={this.setPassengerMail}
                passengerMail={this.state.passengerMail}
                setPassengerNid={this.setPassengerNid}
                passengerNid={this.state.passengerNid}
                setPassengerName={this.setPassengerName}
                passengerName={this.state.passengerName}
                setPassengerMobile={this.setPassengerMobile}
                passengerMobile={this.state.passengerMobile}
                setPassengerPassword={this.setPassengerPassword}
                passengerPassword={this.state.passengerPassword}
              />
            )}
          />

          <Route exact path='/register'
            render={props => (
              <Register {...props}
                history={this.props.history}
                setPassengerMail={this.setPassengerMail}
                passengerMail={this.state.passengerMail}
                setPassengerNid={this.setPassengerNid}
                passengerNid={this.state.passengerNid}
                setPassengerName={this.setPassengerName}
                passengerName={this.state.passengerName}
                setPassengerMobile={this.setPassengerMobile}
                passengerMobile={this.state.passengerMobile}
                setPassengerPassword={this.setPassengerPassword}
                passengerPassword={this.state.passengerPassword}
              />
            )}
          />

          <Route exact path='/verify-ticket'
            render={props => (
              <VerifyTicket {...props}
                history={this.props.history}
                setPassengerMail={this.setPassengerMail}
                passengerMail={this.state.passengerMail}
              />
            )}
          />

          <Route exact path='/contact-us'
            render={props => (
              <ContactUs {...props}
                history={this.props.history}
                setPassengerMail={this.setPassengerMail}
                passengerMail={this.state.passengerMail}
              />
            )}
          />

          <Route exact path='/home-user'
            render={props => (
              <HomeUser {...props}
                history={this.props.history}
                setPassengerMail={this.setPassengerMail}
                passengerMail={this.state.passengerMail}
                setFromStationID={this.setFromStationID}
                fromStationID={this.state.fromStationID}
                setToStationID={this.setToStationID}
                toStationID={this.state.toStationID}
                setFromStationPosition={this.setFromStationPosition}
                fromStationPosition={this.state.fromStationPosition}
                setToStationPosition={this.setToStationPosition}
                toStationPosition={this.state.toStationPosition}
                setJourneyDate={this.setJourneyDate}
                journeyDate={this.state.journeyDate}
                setClassID={this.setClassID}
                classID={this.state.classID}
                setNoOfPassengers={this.setNoOfPassengers}
                noOfPassengers={this.state.noOfPassengers}
                setSelectedTrainID={this.setSelectedTrainID}
                selectedTrainID={this.state.selectedTrainID}
              />
            )}
          />

          <Route exact path='/verify-ticket-user'
            render={props => (
              <VerifyTicketUser {...props}
                history={this.props.history}
                setPassengerMail={this.setPassengerMail}
                passengerMail={this.state.passengerMail}
              />
            )}
          />

          <Route exact path='/contact-us-user'
            render={props => (
              <ContactUsUser {...props}
                history={this.props.history}
                setPassengerMail={this.setPassengerMail}
                passengerMail={this.state.passengerMail}
              />
            )}
          />

          <Route exact path='/dashboard-user'
            render={props => (
              <DashboardUser {...props}
                history={this.props.history}
                setPassengerMail={this.setPassengerMail}
                passengerMail={this.state.passengerMail}
                setPassengerNid={this.setPassengerNid}
                passengerNid={this.state.passengerNid}
                setPassengerName={this.setPassengerName}
                passengerName={this.state.passengerName}
                setPassengerMobile={this.setPassengerMobile}
                passengerMobile={this.state.passengerMobile}
                setPassengerPassword={this.setPassengerPassword}
                passengerPassword={this.state.passengerPassword}
              />
            )}
          />

          <Route exact path='/admin-login'
            render={props => (
              <AdminLogin {...props}
                history={this.props.history}
                setAdminID={this.setAdminID}
                adminID={this.state.adminID}
              />
            )}
          />

          <Route exact path='/stations'
            render={props => (
              <HomeAdmin {...props}
                history={this.props.history}
                setAdminID={this.setAdminID}
                adminID={this.state.adminID}
              />
            )}
          />


          <Route exact path='/trainlist'
            render={props => (
              <TrainList {...props}
                history={this.props.history}
                setPassengerMail={this.setPassengerMail}
                passengerMail={this.state.passengerMail}
                setFromStationID={this.setFromStationID}
                fromStationID={this.state.fromStationID}
                setToStationID={this.setToStationID}
                toStationID={this.state.toStationID}
                setFromStationPosition={this.setFromStationPosition}
                fromStationPosition={this.state.fromStationPosition}
                setToStationPosition={this.setToStationPosition}
                toStationPosition={this.state.toStationPosition}
                setJourneyDate={this.setJourneyDate}
                journeyDate={this.state.journeyDate}
                setClassID={this.setClassID}
                classID={this.state.classID}
                setNoOfPassengers={this.setNoOfPassengers}
                noOfPassengers={this.state.noOfPassengers}
                setSelectedTrainID={this.setSelectedTrainID}
                selectedTrainID={this.state.selectedTrainID}
              />
            )}
          />

          <Route exact path='/trainlist-user'
            render={props => (
              <TrainListUser {...props}
                history={this.props.history}
                setPassengerMail={this.setPassengerMail}
                passengerMail={this.state.passengerMail}
                setFromStationID={this.setFromStationID}
                fromStationID={this.state.fromStationID}
                setToStationID={this.setToStationID}
                toStationID={this.state.toStationID}
                setFromStationPosition={this.setFromStationPosition}
                fromStationPosition={this.state.fromStationPosition}
                setToStationPosition={this.setToStationPosition}
                toStationPosition={this.state.toStationPosition}
                setJourneyDate={this.setJourneyDate}
                journeyDate={this.state.journeyDate}
                setClassID={this.setClassID}
                classID={this.state.classID}
                setNoOfPassengers={this.setNoOfPassengers}
                noOfPassengers={this.state.noOfPassengers}
                setSelectedTrainID={this.setSelectedTrainID}
                selectedTrainID={this.state.selectedTrainID}
              />
            )}
          />

          <Route exact path='/traincoach'
            render={props => (
              <TrainCoach {...props}
                history={this.props.history}
                setPassengerMail={this.setPassengerMail}
                passengerMail={this.state.passengerMail}
                setFromStationID={this.setFromStationID}
                fromStationID={this.state.fromStationID}
                setToStationID={this.setToStationID}
                toStationID={this.state.toStationID}
                setFromStationPosition={this.setFromStationPosition}
                fromStationPosition={this.state.fromStationPosition}
                setToStationPosition={this.setToStationPosition}
                toStationPosition={this.state.toStationPosition}
                setJourneyDate={this.setJourneyDate}
                journeyDate={this.state.journeyDate}
                setClassID={this.setClassID}
                classID={this.state.classID}
                setNoOfPassengers={this.setNoOfPassengers}
                noOfPassengers={this.state.noOfPassengers}
                setSelectedTrainID={this.setSelectedTrainID}
                selectedTrainID={this.state.selectedTrainID}

                setSelectedCoachID={this.setSelectedCoachID}
                selectedCoachID={this.state.selectedCoachID}
                setSelectedSeats={this.setSelectedSeats}
                selectedSeats={this.state.selectedSeats}
              />
            )}
          />


        </Switch>

      </Router>
    );
  }

}

export default withRouter(App)

