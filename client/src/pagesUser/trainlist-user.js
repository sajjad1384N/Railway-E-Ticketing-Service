import React, {Component} from 'react'
import NavbarUser from '../components/NavbarUser'
import SidebarUser from '../components/SidebarUser'
import Axios from 'axios'
import TrainListContainer from '../components/TrainListContainer'

export default class TrainListUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isSidebarOpen: false,
            trainIDFromPositionToPositionList: [],

            style: {
                display: "flex",
                flexDirection: "column",
                padding: "0px 0px 80px 0px",
            }
        }


        Axios.post("http://localhost:3001/api/getTrainIDFromPositionToPositionList", {
            fromStationID: this.props.fromStationID,
            toStationID: this.props.toStationID,
        })
        .then((res) => {
            for (var i in res.data) {
                var object = {
                    trainID: res.data[i].trainID,
                    fromStationPosition: res.data[i].fromStationPosition,
                    toStationPosition: res.data[i].toStationPosition,
                };

                this.setState({ trainIDFromPositionToPositionList: [...this.state.trainIDFromPositionToPositionList, ...[object]] })
            }
        })


        this.toggleSidebar = this.toggleSidebar.bind(this);
    }


    toggleSidebar = () => {
        this.setState({
            isSidebarOpen: !this.state.isSidebarOpen,
        })
    }
    
    render() {
        return (
            <div style={this.state.style}>
                <SidebarUser isSidebarOpen={this.state.isSidebarOpen} toggleSidebar={this.toggleSidebar} setPassengerMail={this.props.setPassengerMail} passengerMail={this.props.passengerMail} />
                <NavbarUser toggleSidebar={this.toggleSidebar} setPassengerMail={this.props.setPassengerMail} passengerMail={this.props.passengerMail} />
                <TrainListContainer 
                    setPassengerMail={this.props.setPassengerMail} 
                    passengerMail={this.props.passengerMail}
                    setFromStationID={this.props.setFromStationID}
                    fromStationID={this.props.fromStationID}
                    setToStationID={this.props.setToStationID}
                    toStationID={this.props.toStationID}
                    setFromStationPosition={this.props.setFromStationPosition}
                    fromStationPosition={this.props.fromStationPosition}
                    setToStationPosition={this.props.setToStationPosition}
                    toStationPosition={this.props.toStationPosition}
                    setJourneyDate={this.props.setJourneyDate}
                    journeyDate={this.props.journeyDate}
                    setClass={this.props.setClass}
                    class={this.props.class}
                    setNoOfPassengers={this.props.setNoOfPassengers}
                    noOfPassengers={this.props.noOfPassengers}
                    setSelectedTrainID={this.props.setSelectedTrainID}
                    selectedTrainID={this.props.setSelectedTrainID}

                    trainIDFromPositionToPositionList={this.state.trainIDFromPositionToPositionList}
                />
            </div>
        )
    }
}
