import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { Container, Button, Heading, Form, Select, ButtonAndNavLinkBox } from './AddClerkContainerElements'
import Axios from 'axios'

class AddClerkContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {

            stationName: "",
            stationDistrict: "",

            stationList: [],

            styleHeading: {
                color: "#fff",
                textAlign: "center",
            },
            styleInput: {
                height: "40px",
                padding: "0px 0px 0px 10px",
            },
            styleLabel: {
                padding: "0px 0px 0px 0px",
            },
            styleHr: {
                background: "transparent",
                color: "transparent",
                margin: "0",
                borderStyle: "none",
                height: "1vw",
            },
        }

        Axios.post("http://localhost:3001/api/getStationList", {
        })
        .then((res) => {
            for (var i in res.data) {
                var object = res.data[i].Name;

                this.setState({ stationList: [...this.state.stationList, ...[object]] })
            }
        })

        this.addPressed = this.addPressed.bind(this);

        this.setStationName = this.setStationName.bind(this);
        this.setStationDistrict = this.setStationDistrict.bind(this);
    }

    addPressed = event => {
        event.preventDefault();

        Axios.post("http://localhost:3001/api/addNewStation", {
            station_name: this.state.stationName,
            station_district: this.state.stationDistrict,
        })
            .then((res) => {
                if (res.data.isValid) {
                    alert("Station Added Successfully!");
                } else {
                    alert("Staion already exits!");
                }
            })

        this.props.setIsAddStationContainerOpen();

    };

    setStationName(data) {
        this.setState({
            stationName: data,
        })
    }

    setStationDistrict(data) {
        this.setState({
            stationDistrict: data,
        })
    }

    render() {
        return (
            <Container>
                <Heading>
                    <h2 style={this.state.styleHeading}>Add New Clerk</h2>
                </Heading>

                <Form>
                    <label style={this.state.styleLabel}>Clerk Name</label>
                    <hr style={this.state.styleHr}></hr>
                    <input style={this.state.styleInput} onChange={(e) => { this.setStationName(e.target.value) }} type="text" placeholder="Enter Name" />
                    <br ></br>

                    <label style={this.state.styleLabel}>Clerk Email</label>
                    <hr style={this.state.styleHr}></hr>
                    <input style={this.state.styleInput} onChange={(e) => { this.setStationName(e.target.value) }} type="text" placeholder="Enter Email" />
                    <br ></br>

                    <label style={this.state.styleLabel}>Clerk Mobile No.</label>
                    <hr style={this.state.styleHr}></hr>
                    <input style={this.state.styleInput} onChange={(e) => { this.setStationDistrict(e.target.value) }} type="number" placeholder="Enter Mobile No" />
                    <br></br>

                    <label style={this.state.styleLabel}>Clerk Password</label>
                    <hr style={this.state.styleHr}></hr>
                    <input style={this.state.styleInput} onChange={(e) => { this.setStationDistrict(e.target.value) }} type="password" placeholder="Enter Password" />
                    <br></br>

                    <label style={this.state.styleLabel}>Station Name</label>
                    <hr style={this.state.styleHr}></hr>
                    <Select onChange={(e) => { this.setSelectedFromStationName(e.target.value) }} >
                        <option value="" disabled selected>Select a station</option>
                        {this.state.stationList.map((station, index) => {
                            return <option key={index} value={station}>
                                {station}
                            </option>
                        })}
                    </Select>
                    <br></br>
                    <hr style={this.state.styleHr}></hr>

                    <ButtonAndNavLinkBox>
                        <Button onClick={this.addPressed}>Add</Button>
                    </ButtonAndNavLinkBox>
                </Form>

            </Container>
        )
    }
}

export default withRouter(AddClerkContainer)

//Login form checked