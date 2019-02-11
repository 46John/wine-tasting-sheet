import React, {Component} from 'react';

class SheetPreferences extends Component{
    render(){
        const {
            selectedWines,
            changeView
        } = this.props;
        return(
            <div className="row">
                <div className="col-12">
                    <h2>Tasting Sheet Options</h2>
                    <p>Below are the wines you selected for your tasting sheet. If these are incorrect, or in the wrong order, please click the back button, and adjust the list accordingly. The retail price per bottle is shown by default, but these prices can be changed to fit your audience.</p>
                </div>
                <div className="col-12">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Wine</th>
                            <th scope="col">Rating(s)</th>
                            <th scope="col">Price (SRP)</th>
                        </tr>
                        </thead>
                        <tbody>
                        {selectedWines.map((wine, index) => (
                            <tr key={index}>
                                <td>{wine.title}</td>
                                <td>{wine.ratings.map((rating) => (
                                    <span>{rating.value} - {rating.name} </span>
                                ))}</td>
                                <td>$ <input type="number" placeholder={wine.price} value={wine.price} onChange={(e) => {this.onChangePrice(e,index)}}/></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    <h4>Sheet Preferences</h4>
                                    <p>Select the items that you want to appear on your tasting sheet:</p>
                                    <ul className="sheetPreferences">
                                        <li>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="checkTastingNotes"/>
                                                <label className="form-check-label" htmlFor="checkTastingNotes">Tasting
                                                    Notes</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="checkPricing"/>
                                                <label className="form-check-label" htmlFor="checkPricing">Pricing</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="checkImages"/>
                                                <label className="form-check-label" htmlFor="checkImages">Label
                                                    Images</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="checkWinery"/>
                                                <label className="form-check-label" htmlFor="checkWinery">Winery
                                                    Info</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-8">
                                    <h4>Event Information (optional)</h4>
                                    <div className="form-group">
                                        <label htmlFor="eventName">Event Name</label>
                                        <input type="text" className="form-control" id="eventName"
                                               aria-describedby="eventName"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="eventDate">Event Date</label>
                                        <input type="date" className="form-control" id="eventDate"
                                               aria-describedby="eventDate"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="eventTime">Event Time</label>
                                        <input type="time" className="form-control" id="eventTime"
                                               aria-describedby="eventTime"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="eventVenue">Event Venue</label>
                                        <input type="text" className="form-control" id="eventVenue"
                                               aria-describedby="eventVenue"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="eventPresenter">Presented By</label>
                                        <input type="text" className="form-control" id="eventPresenter"
                                               aria-describedby="eventPresenter"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="controls col-12">
                    <div className="row">
                        <div className="col-6">
                            <button className="button-large back-button" onClick={()=>changeView('select-wines')}>Back</button>

                        </div>
                        <div className="col-6 text-right">
                            <button className="button-large next-button d-inline-block" onClick={()=>changeView('select-wines')}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SheetPreferences;