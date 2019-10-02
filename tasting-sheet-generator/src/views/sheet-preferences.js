import React, {Component} from 'react';

class SheetPreferences extends Component{

    render(){
        const {
            selectedWines,
            changeView,
            onChangePrice,
            onChangeUpdateEventInfo,
            eventInfo,
            sheetIncludes,
            toggleSheetInfo
        } = this.props;
        return(
            <div className="row">
                <div className="col-12">
                    <div className="view-instructions">
                        <h2>Tasting Sheet Options</h2>
                        <p>Below are the wines you selected for your tasting sheet. If these are incorrect, or in the wrong order, please click the back button, and adjust the list accordingly. The retail price per bottle is shown by default, but these prices can be changed to fit your audience.</p>
                    </div>
                </div>
                <div className="col-12">
                    <table className="table selected-wines-table table-responsive-sm">
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
                                <td>{wine.ratings.map((rating, index) => (
                                    <span key={index}>{rating.value} - {rating.name} </span>
                                ))}</td>
                                <td>$ <input type="number" placeholder={wine.price} value={wine.price} onChange={(e) => onChangePrice(e,index)}/></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                                    <h4>Sheet Preferences</h4>
                                    <p>Select the items that you want to appear on your tasting sheet:</p>
                                    <div className="sheetPreferences">
                                        <li>
                                            <div className="form-check">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="checkTastingNotes"
                                                    onChange={()=>toggleSheetInfo("notes")}
                                                    checked={sheetIncludes.notes === true ? true : false}
                                                />
                                                <label className="form-check-label" htmlFor="checkTastingNotes">Tasting
                                                    Notes</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="checkRatings"
                                                    onChange={()=>toggleSheetInfo("ratings")}
                                                    checked={sheetIncludes.ratings === true ? true : false}
                                                />
                                                <label className="form-check-label" htmlFor="checkRatings">Ratings</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="checkPricing"
                                                    onChange={()=>toggleSheetInfo("price")}
                                                    checked={sheetIncludes.price === true ? true : false}
                                                />
                                                <label className="form-check-label" htmlFor="checkPricing">Pricing</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="checkImages"
                                                    onChange={()=>toggleSheetInfo("images")}
                                                    checked={sheetIncludes.images === true ? true : false}
                                                />
                                                <label className="form-check-label" htmlFor="checkImages">Label
                                                    Images</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="checkWinery"
                                                    onChange={()=>toggleSheetInfo("info")}
                                                    checked={sheetIncludes.info === true ? true : false}
                                                />
                                                <label className="form-check-label" htmlFor="checkWinery">Winery
                                                    Info</label>
                                            </div>
                                        </li>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-8">
                                    <h4>Event Information (optional)</h4>
                                    <div className="form-group">
                                        <label htmlFor="eventName">Event Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="eventName"
                                            aria-describedby="eventName"
                                            value={eventInfo.eventName}
                                            onChange={(e) => onChangeUpdateEventInfo(e.target.value, "eventName")}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="eventDate">Event Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="eventDate"
                                            aria-describedby="eventDate"
                                            value={eventInfo.eventDate}
                                            onChange={(e) => onChangeUpdateEventInfo(e.target.value, "eventDate")}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="eventTime">Event Time</label>
                                        <input
                                            type="time"
                                            className="form-control"
                                            id="eventTime"
                                            aria-describedby="eventTime"
                                            value={eventInfo.eventTime}
                                            onChange={(e) => onChangeUpdateEventInfo(e.target.value, "eventTime")}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="eventVenue">Event Venue</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="eventVenue"
                                            aria-describedby="eventVenue"
                                            value={eventInfo.eventVenue}
                                            onChange={(e) => onChangeUpdateEventInfo(e.target.value, "eventVenue")}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="eventPresenter">Presented By</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="eventPresenter"
                                            aria-describedby="eventPresenter"
                                            value={eventInfo.eventPresenter}
                                            onChange={(e) => onChangeUpdateEventInfo(e.target.value, "eventPresenter")}
                                        />
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
                            <button className="button-large next-button d-inline-block" onClick={()=>changeView('sheet-preview')}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SheetPreferences;