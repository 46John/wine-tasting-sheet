import React, { Component } from 'react';

import SheetPreferences from './views/sheet-preferences';
import SelectWines from './views/select-wines';
import SheetPreview from './views/sheet-preview';
import Footer from './footer';
import './App.scss';

class App extends Component {
    state = {
        "allWines" : {},
        "selectedWines" : [],
        "selectedIds" : {},
        "draggingNewItem" : false,
        "currentView" : "sheet-preview"
    }
    componentDidMount(){
        let apiUrl = "/wines";
        fetch(apiUrl)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    "allWines" : response
                })
            });
    };
    onDragOver = (ev) => {
        ev.preventDefault();
    };
    onDragStart = (e, category, id, index) => {
        this.setState({
            "draggingNewItem" : true
        })
        e.dataTransfer.setData("category", category);
        e.dataTransfer.setData("id", id);
    };
    onDrop = (e) => {

        let id = parseInt(e.dataTransfer.getData("id"));

        if(this.state.selectedIds.hasOwnProperty(id)){
            return;
        }

        let cat = e.dataTransfer.getData("category").toLowerCase();
        let selectedWines = this.state.selectedWines.concat(this.state.allWines[cat].filter((wine) => { return wine.id === id}));
        let selectedIds = this.state.selectedIds;
        let allWines = this.state.allWines;
        selectedIds[id] = id;
        allWines[cat] = this.state.allWines[cat].filter((wine) => wine.id !== id);
        this.setState({
            allWines,
            "selectedWines" : selectedWines,
            "draggingNewItem" : false
        })
    };
    dragReorder = (e, index, id) => {
        this.draggedItem = this.state.selectedWines[index];
        e.dataTransfer.setData("id", id);
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", e.target);
    };
    dragReorderOver = (index) => {
        const draggedOverItem = this.state.selectedWines[index];
        if(this.draggedItem === draggedOverItem || this.state.draggingNewItem === true){
            return;
        }
        let selectedWines = this.state.selectedWines.filter(wine => wine !== this.draggedItem);
        selectedWines.splice(index, 0, this.draggedItem);
        this.setState({selectedWines});
    };
    removeFromList = (index, id, cat) =>{
        const category = cat.toLowerCase();
        let selectedWines = this.state.selectedWines.filter(wine => wine.id !== id);
        let allWines = this.state.allWines;
        let selectedIds = this.state.selectedIds;
        delete selectedIds[id];
        allWines[category] = allWines[category].concat(this.state.selectedWines[index]);

        this.setState({
            selectedWines,
            allWines,
            selectedIds
        })
    };
    addAllWines = () => {
        const allWines = this.state.allWines;

        if(Object.values(allWines).flat().length === 0){
            return;
        }
        let newAllWines = {};
        let selectedWines = this.state.selectedWines.concat(Object.values(allWines).flat());
        let selectedIds = {};
        for(let i = 0; i < selectedWines.length; i++){
            let id = selectedWines[i].id;
            selectedIds[id] = id;
            if(newAllWines[selectedWines[i].category]){

            }else{
                newAllWines[selectedWines[i].category] = [];
            }
        }
        this.setState({
            allWines : newAllWines,
            selectedWines,
            selectedIds
        })
    };
    removeAllWines = () => {
        const selectedWines = this.state.selectedWines;

        if(Object.values(selectedWines).length === 0){
            return;
        }
        let newSelectedWines = [];
        let allWines = this.state.allWines;
        let selectedIds = {};
        for(let i = 0; i < selectedWines.length; i++){
            allWines[selectedWines[i].category].push(selectedWines[i]);
        }
        console.log(allWines);
        this.setState({
            allWines,
            selectedWines : newSelectedWines,
            selectedIds
        })
    };
    onChangePrice = (e, index) => {
        let selectedWines = this.state.selectedWines;
        selectedWines[index].price = e.target.value;
        this.setState({
            selectedWines
        })
    };
    changeView = (viewName) => {
        this.setState({
            currentView : viewName
        })
    };
  render() {
    return (
      <div className="tsc">
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="logo-wrap d-inline-block">
                            <img className="logo" src="https://www.stsupery.com/wp-content/uploads/2018/03/St.Supery_Logo-SM.png" alt="St.Supery Logo"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-intro">

            </div>
        </header>
        <div className="container">
            <div className="row">
                <div className="col-12 intro-text">
                    <h1 className="page-title">Tasting Sheet Creator</h1>
                    <p>Using the list below, drag and drop the wines you would like to appear in your tasting sheet. You can rearrange you list of selected wines by dragging and dropping them into your preferred order.</p>
                </div>
            </div>
        </div>
        <div className="main container">
            {this.state.currentView === 'select-wines' && (
                <SelectWines
                allWines={this.state.allWines}
                selectedWines={this.state.selectedWines}
                onDragStart={this.onDragStart}
                addAllWines={this.addAllWines}
                removeAllWines={this.removeAllWines}
                removeFromList={this.removeFromList}
                onDragOver={this.onDragOver}
                onDrop={this.onDrop}
                dragReorderOver={this.dragReorderOver}
                dragReorder={this.dragReorder}
                removeFromList={this.removeFromList}
                changeView={this.changeView}
            ></SelectWines>
            )}
            {this.state.currentView === 'sheet-preferences' && (
                <SheetPreferences selectedWines={this.state.selectedWines} changeView={this.changeView}></SheetPreferences>
            )}
            {(this.state.currentView === 'sheet-preview' && (
                <SheetPreview></SheetPreview>
            ))}
        </div>
          <Footer></Footer>
      </div>
    );
  }
}

export default App;
