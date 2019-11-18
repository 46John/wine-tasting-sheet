import React, { Component } from 'react';

import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

import SheetPreferences from './sheet-preferences';
import SelectWines from './select-wines';
import SheetPreview from './sheet-preview';

import '../App.scss';


class App extends Component {
    state = {
        currentView : "select-wines",
    }

    componentDidMount(){
        this.props.dispatch(handleInitialData());
    };

    changeView = (viewName) => {
        this.setState({
            currentView : viewName
        })
    };

  render() {
        const { selectedProducts, sheetOptions, eventInfo } = this.props;
    return (
      <div className="tsc">
        <div className="main container">
            {this.props.allWines.length === 0 && (
                <div className="row">
                    <div className="col-12">
                        <div className="loading">
                            <div className="spinner"><i className="fa fa-spinner"></i></div>
                            <p>Loading...</p>
                        </div>
                    </div>
                </div>
            )}
            {this.state.currentView === 'select-wines' && this.props.allWines.length !== 0 && (
                <SelectWines changeView={this.changeView} />
            )}
            {this.state.currentView === 'sheet-preferences' && (
                <SheetPreferences
                    selectedWines={this.state.selectedWines}
                    changeView={this.changeView}
                    eventInfo={this.state.eventInfo}
                    onChangeUpdateEventInfo={this.onChangeUpdateEventInfo}
                    onChangePrice={this.onChangePrice}
                    toggleSheetInfo={this.toggleSheetInfo}
                    sheetIncludes={this.state.sheetIncludes}
                ></SheetPreferences>
            )}
            {(this.state.currentView === 'sheet-preview' && (
                <SheetPreview
                    selectedProducts={selectedProducts}
                    eventInfo={eventInfo}
                    sheetOptions={sheetOptions}
                    changeView={this.changeView}
                ></SheetPreview>
            ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return state;
}

export default connect(mapStateToProps)(App);
