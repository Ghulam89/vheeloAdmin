import React, { useState, useEffect } from 'react';
import '../../../css/main.6120d571.css';
import axios from 'axios';
import BASE_URL from '../../../BASE_URL';

function CancelledTrips() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [trips, setTrips] = useState([]);
  const [checked, setChecked] = useState(false);
  const [singleChecked, setSingleChecked] = useState(false);

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${BASE_URL}admin/rideQuick/getCancelled`,
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        console.log(response.data.data);
        setTrips(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={"login-activity"}>
      <div className="">
        <div id="main-wrapper" className="show">
          <div className="container-fluid p-5">
            <div className="page-titles">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/react/demo/table-bootstrap-basic">Vheelo</a>
                </li>
                <li className="breadcrumb-item active">
                  <a href="/react/demo/table-bootstrap-basic">Cancelled Trips</a>
                </li>
              </ol>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title h5">Cancelled Trips</div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="width50">
                              <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="checkAll"
                                  onClick={() => {
                                    setChecked(!checked);
                                  }}
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="checkAll"
                                />
                              </div>
                            </th>
                            <th>
                              <strong>USER</strong>
                            </th>
                            <th>
                              <strong>RIDE DATE</strong>
                            </th>
                            <th>
                              <strong>PICKUP LOCATION</strong>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {trips.map((trip, index) => (
                            <tr key={index}>
                               <td>
                              <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                                {checked?<input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id={`customCheckBox${index}`}
                                  checked={true}
                                  onClick={() => setSingleChecked(index)}
                                />:<input
                                type="checkbox"
                                className="custom-control-input"
                                id={`customCheckBox${index}`}
                                onClick={() => setSingleChecked(index)}
                              />}
                                <label
                                  className="custom-control-label"
                                  htmlFor={`customCheckBox${index}`}
                                />
                              </div>
                            </td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <span className="w-space-no">
                                    {trip?.userData?.firstName + ' ' + trip?.userData?.lastName}
                                  </span>
                                </div>
                              </td>
                              <td>{trip.rideData.createdAt}</td>
                              <td>{trip.rideData['pickupLocation']}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CancelledTrips;




