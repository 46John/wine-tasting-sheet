import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedProductPrice } from '../actions/selectedProducts';
import { updateEventInfo } from '../actions/eventInfo';
import { setSheetOptions } from '../actions/sheetOptions';
import CurrencyFormat from 'react-currency-format';

class SheetPreferences extends Component{

    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render(){
        const {
            selectedProducts,
            changeView,
            setSelectedProductPrice,
            setSheetOptions,
            sheetOptions,
            eventInfo,
            updateEventInfo
        } = this.props;

        return(
            <div className="row">
                <div className="col-12">
                    <div className="view-instructions">
                        <h2>Tasting Sheet Options</h2>
                    </div>
                </div>
                <div className="col-12">
                    <table className="table selected-wines-table table-responsive-lg">
                        <thead>
                        <tr>
                            <th scope="col">Wine</th>
                            <th scope="col">Price (SRP)</th>
                            <th scope="col">Custom Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {selectedProducts.map((wine, index) => (
                            <tr key={index}>
                                <td>{wine.name}</td>
                                <td>${wine.price}</td>
                                <td>
                                    <CurrencyFormat
                                        placeholder={`$ ${wine.price}`}
                                        prefix={'$'}
                                        thousandSeparator={true}
                                        allowNegative={false}
                                        decimalScale="2"
                                        fixedDecimalScale={true}
                                        onBlur={(e) => setSelectedProductPrice(wine.id, e.target.value.slice(1))} />
                                </td>
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
                                                    onChange={()=> setSheetOptions("notes")}
                                                    checked={sheetOptions.notes}
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
                                                    onChange={()=> setSheetOptions("ratings")}
                                                    checked={sheetOptions.ratings}
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
                                                    onChange={()=>setSheetOptions("price")}
                                                    checked={sheetOptions.price}
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
                                                    onChange={()=>setSheetOptions("images")}
                                                    checked={sheetOptions.images}
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
                                                    onChange={()=>setSheetOptions("info")}
                                                    checked={sheetOptions.info}
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
                                            onChange={(e) => updateEventInfo("eventName", e.target.value)}
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
                                            onChange={(e) => updateEventInfo("eventDate", e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="eventTime">Event Time</label>
                                        <input
                                            type="time"
                                            pattern="[0-9]{2}:[0-9]{2}"
                                            className="form-control"
                                            id="eventTime"
                                            aria-describedby="eventTime"
                                            value={eventInfo.eventTime}
                                            onChange={(e) => {updateEventInfo("eventTime", e.target.value)}}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="eventVenue">Event Venue</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="eventVenue"
                                            aria-describedby="eventVenue"
                                            value={eventInfo.eventVenu}
                                            onChange={(e) => updateEventInfo("eventVenue", e.target.value)}
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
                                            onChange={(e) => updateEventInfo("eventPresenter", e.target.value)}
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

const mapStateToProps = ({ selectedProducts, sheetOptions, eventInfo }) => {
    return {
        selectedProducts,
        eventInfo,
        sheetOptions,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            setSelectedProductPrice,
            updateEventInfo,
            setSheetOptions,
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SheetPreferences);