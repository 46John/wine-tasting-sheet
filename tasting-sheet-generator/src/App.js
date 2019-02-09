import React, { Component } from 'react';
import ListWines from './list-wines';
import './App.scss';

class App extends Component {
    state = {
        "allWines" : {},
        "selectedWines" : [],
        "selectedIds" : {},
        "draggingNewItem" : false
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
    }
    onDragOver = (ev) => {
        ev.preventDefault();
    }
    onDragStart = (e, category, id, index) => {
        this.setState({
            "draggingNewItem" : true
        })
        e.dataTransfer.setData("category", category);
        e.dataTransfer.setData("id", id);
    }
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
    }
    dragReorder = (e, index, id) => {
        this.draggedItem = this.state.selectedWines[index];
        e.dataTransfer.setData("id", id);
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", e.target);
    }
    dragReorderOver = (index) => {
        const draggedOverItem = this.state.selectedWines[index];
        if(this.draggedItem === draggedOverItem || this.state.draggingNewItem === true){
            return;
        }
        let selectedWines = this.state.selectedWines.filter(wine => wine !== this.draggedItem);
        selectedWines.splice(index, 0, this.draggedItem);
        this.setState({selectedWines});
    }
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
    }
    addAllWines = () => {
        const allWines = this.state.allWines;
        let newAllWines = {};
        let selectedWines = Object.values(allWines).flat();
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
    }
  render() {
    return (
      <div className="tsc">
        <header className="container">
            <div className="row">
                <div className="col-12">
                    <h1>St. Supery Tasting Sheet Creator</h1>
                    <p>This tool will help you build a custom tasting sheet in two easy steps:</p>
                    <ul>
                        <li><span>1)</span>Select the wines for your tasting from the list of available wines on the left. The tasting order will be determined by the order in which you added the wines, so if you need to re-order the list, simply select "remove all" and start over.</li>
                        <li><span>2)</span>When you've got the wines added in the order you'll be tasting them, click on "Build and organize my tasting sheet" to continue.</li>
                    </ul>
                </div>
            </div>
        </header>
        <div className="tsc-picker container">
            <div className="row">
                <div className="col-6">
                    <h2>Available Wines <span><button onClick={this.addAllWines}>Add All ></button></span></h2>
                    <ListWines wineList={this.state.allWines} fireDragStart={this.onDragStart}></ListWines>

                </div>
                <div className="col-6">
                    <h2>Selected Wines</h2>
                    <div className="selectedWines" onDragOver={(e) => this.onDragOver(e)} onDrop={(e)=>{this.onDrop(e)}}>
                        {this.state.selectedWines.length === 0 &&(
                            <p> drag items from the left here</p>
                        )}
                        <ul>
                            {this.state.selectedWines && this.state.selectedWines.map((wine,index)=>(
                                <li key={index} onDragOver={() => this.dragReorderOver(index)}>
                                    <div draggable onDragStart={(e) => this.dragReorder(e, index, wine.id)}>
                                        <button className="remove" onClick={() => this.removeFromList(index, wine.id, wine.category)}>Remove</button>
                                        <span>{wine.title}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="controls">
                        {this.state.selectedWines.length > 0 && (
                            <button>Next</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
