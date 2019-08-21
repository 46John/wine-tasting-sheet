import React, { Component } from 'react';

import SheetPreferences from './views/sheet-preferences';
import SelectWines from './views/select-wines';
import SheetPreview from './views/sheet-preview';
import Footer from './footer';
import './App.scss';

class App extends Component {
    state = {
        allWines : {
              "dollarhide" :[
                {
                  "id" : 231,
                  "title" : "2013 Dollarhide Estate Vineyard Cabernet Sauvignon",
                  "category" : "dollarhide",
                  "notes" : "This bright, ripe structured Cabernet Sauvignon has length and integrity, introduced by its deep and intense red and purple hues. Blackberry and cassis combine with dark mocha, roasted coffee, toasted oak and dark molasses for a rich and velvety fusion of aromas. Dark blackberry and plum bring a heady flavor, along with notes of cassis, dusted terroir, espresso, brown sugar and highly toasted barrel.",
                  "ratings" : [
                    { "name" : "Decanter", "value" : 91 },
                    { "name" : "Parker's Wine Advocate", "value" : 93 }
                  ],
                  "price" : 100.00,
                  "image" : "https://rendering.mcp.cimpress.com/v1/vp/preview?instructions_uri=http%3a%2f%2fservices.vistaprint.com%2fsales%2fdocuments%2fpreviewing%2foriondocsignature.aspx%3ftemplate%3d282501_AAY%26language_id%3d1%26hidebleed%3d1&width=450&height=1000&bgcolor=F0F2F3&quality=100&category=gp&merchant_metadata=AAY"
                },
                {
                  "id" : 232,
                  "title" : "2016 Dollarhide Estate Vineyard Sauvignon Blanc",
                  "category" : "dollarhide",
                  "notes" : "This bright, ripe structured Cabernet Sauvignon has length and integrity, introduced by its deep and intense red and purple hues. Blackberry and cassis combine with dark mocha, roasted coffee, toasted oak and dark molasses for a rich and velvety fusion of aromas. Dark blackberry and plum bring a heady flavor, along with notes of cassis, dusted terroir, espresso, brown sugar and highly toasted barrel.",
                  "ratings" : [
                    { "name" : "Decanter", "value" : 91 },
                    { "name" : "Parker's Wine Advocate", "value" : 93 }
                  ],
                  "price" : 100.00,
                  "image" : "https://rendering.mcp.cimpress.com/v1/vp/preview?instructions_uri=http%3a%2f%2fservices.vistaprint.com%2fsales%2fdocuments%2fpreviewing%2foriondocsignature.aspx%3ftemplate%3d282501_AAY%26language_id%3d1%26hidebleed%3d1&width=450&height=1000&bgcolor=F0F2F3&quality=100&category=gp&merchant_metadata=AAY"
                },
                {
                  "id" : 233,
                  "title" : "2014 Dollarhide Estate Vineyard Cabernet Sauvignon",
                  "category" : "dollarhide",
                  "notes" : "This bright, ripe structured Cabernet Sauvignon has length and integrity, introduced by its deep and intense red and purple hues. Blackberry and cassis combine with dark mocha, roasted coffee, toasted oak and dark molasses for a rich and velvety fusion of aromas. Dark blackberry and plum bring a heady flavor, along with notes of cassis, dusted terroir, espresso, brown sugar and highly toasted barrel.",
                  "ratings" : [
                    { "name" : "Decanter", "value" : 91 },
                    { "name" : "Parker's Wine Advocate", "value" : 93 }
                  ],
                  "price" : 100.00,
                  "image" : "https://rendering.mcp.cimpress.com/v1/vp/preview?instructions_uri=http%3a%2f%2fservices.vistaprint.com%2fsales%2fdocuments%2fpreviewing%2foriondocsignature.aspx%3ftemplate%3d282501_AAY%26language_id%3d1%26hidebleed%3d1&width=450&height=1000&bgcolor=F0F2F3&quality=100&category=gp&merchant_metadata=AAY"
                }
              ],
              "estate" : [
                {
                  "id" : 234,
                  "title" : "2016 Napa Valley Estate Sauvignon Blanc",
                  "category" : "estate",
                  "notes" : "This bright, ripe structured Cabernet Sauvignon has length and integrity, introduced by its deep and intense red and purple hues. Blackberry and cassis combine with dark mocha, roasted coffee, toasted oak and dark molasses for a rich and velvety fusion of aromas. Dark blackberry and plum bring a heady flavor, along with notes of cassis, dusted terroir, espresso, brown sugar and highly toasted barrel.",
                  "ratings" : [
                    { "name" : "Decanter", "value" : 91 },
                    { "name" : "Parker's Wine Advocate", "value" : 93 }
                  ],
                  "price" : 100.00,
                  "image" : "https://rendering.mcp.cimpress.com/v1/vp/preview?instructions_uri=http%3a%2f%2fservices.vistaprint.com%2fsales%2fdocuments%2fpreviewing%2foriondocsignature.aspx%3ftemplate%3d282501_AAY%26language_id%3d1%26hidebleed%3d1&width=450&height=1000&bgcolor=F0F2F3&quality=100&category=gp&merchant_metadata=AAY"
                },
                {
                  "id" : 235,
                  "title" : "2015 Napa Valley Estate Moscato",
                  "category" : "estate",
                  "notes" : "This bright, ripe structured Cabernet Sauvignon has length and integrity, introduced by its deep and intense red and purple hues. Blackberry and cassis combine with dark mocha, roasted coffee, toasted oak and dark molasses for a rich and velvety fusion of aromas. Dark blackberry and plum bring a heady flavor, along with notes of cassis, dusted terroir, espresso, brown sugar and highly toasted barrel.",
                  "ratings" : [
                    { "name" : "Decanter", "value" : 91 },
                    { "name" : "Parker's Wine Advocate", "value" : 93 }
                  ],
                  "price" : 100.00,
                  "image" : "https://rendering.mcp.cimpress.com/v1/vp/preview?instructions_uri=http%3a%2f%2fservices.vistaprint.com%2fsales%2fdocuments%2fpreviewing%2foriondocsignature.aspx%3ftemplate%3d282501_AAY%26language_id%3d1%26hidebleed%3d1&width=450&height=1000&bgcolor=F0F2F3&quality=100&category=gp&merchant_metadata=AAY"
                },
                {
                  "id" : 236,
                  "title" : "2014 Napa Valley Estate Cabernet Sauvignon",
                  "category" : "estate",
                  "notes" : "This bright, ripe structured Cabernet Sauvignon has length and integrity, introduced by its deep and intense red and purple hues. Blackberry and cassis combine with dark mocha, roasted coffee, toasted oak and dark molasses for a rich and velvety fusion of aromas. Dark blackberry and plum bring a heady flavor, along with notes of cassis, dusted terroir, espresso, brown sugar and highly toasted barrel.",
                  "ratings" : [
                    { "name" : "Decanter", "value" : 91 },
                    { "name" : "Parker's Wine Advocate", "value" : 93 }
                  ],
                  "price" : 100.00,
                  "image" : "https://rendering.mcp.cimpress.com/v1/vp/preview?instructions_uri=http%3a%2f%2fservices.vistaprint.com%2fsales%2fdocuments%2fpreviewing%2foriondocsignature.aspx%3ftemplate%3d282501_AAY%26language_id%3d1%26hidebleed%3d1&width=450&height=1000&bgcolor=F0F2F3&quality=100&category=gp&merchant_metadata=AAY"
                }
              ],
              "meritage" : [
                {
                  "id" : 237,
                  "title" : "2013 Napa Valley Estate Élu",
                  "category" : "meritage",
                  "notes" : "This bright, ripe structured Cabernet Sauvignon has length and integrity, introduced by its deep and intense red and purple hues. Blackberry and cassis combine with dark mocha, roasted coffee, toasted oak and dark molasses for a rich and velvety fusion of aromas. Dark blackberry and plum bring a heady flavor, along with notes of cassis, dusted terroir, espresso, brown sugar and highly toasted barrel.",
                  "ratings" : [
                    { "name" : "Decanter", "value" : 91 },
                    { "name" : "Parker's Wine Advocate", "value" : 93 }
                  ],
                  "price" : 100.00,
                  "image" : "https://rendering.mcp.cimpress.com/v1/vp/preview?instructions_uri=http%3a%2f%2fservices.vistaprint.com%2fsales%2fdocuments%2fpreviewing%2foriondocsignature.aspx%3ftemplate%3d282501_AAY%26language_id%3d1%26hidebleed%3d1&width=450&height=1000&bgcolor=F0F2F3&quality=100&category=gp&merchant_metadata=AAY"
                },
                {
                  "id" : 238,
                  "title" : "2016 Napa Valley Estate Virtú",
                  "category" : "meritage",
                  "notes" : "This bright, ripe structured Cabernet Sauvignon has length and integrity, introduced by its deep and intense red and purple hues. Blackberry and cassis combine with dark mocha, roasted coffee, toasted oak and dark molasses for a rich and velvety fusion of aromas. Dark blackberry and plum bring a heady flavor, along with notes of cassis, dusted terroir, espresso, brown sugar and highly toasted barrel.",
                  "ratings" : [
                    { "name" : "Decanter", "value" : 91 },
                    { "name" : "Parker's Wine Advocate", "value" : 93 }
                  ],
                  "price" : 100.00,
                  "image" : "https://rendering.mcp.cimpress.com/v1/vp/preview?instructions_uri=http%3a%2f%2fservices.vistaprint.com%2fsales%2fdocuments%2fpreviewing%2foriondocsignature.aspx%3ftemplate%3d282501_AAY%26language_id%3d1%26hidebleed%3d1&width=450&height=1000&bgcolor=F0F2F3&quality=100&category=gp&merchant_metadata=AAY"
                }
              ]
          },
        selectedWines : [],
        selectedIds : {},
        draggingNewItem : false,
        currentView : "select-wines",
        eventInfo : {
            eventName : '',
            eventDate : '',
            eventTime : '',
            eventVenue : '',
            eventPresenter: ''
        },
        sheetIncludes: {
            notes : false,
            price : false,
            images : false,
            info : false,
            ratings : false
        }
    }
    componentDidMount(){
        // let apiUrl = "/wines";
        // fetch(apiUrl)
        //     .then(response => response.json())
        //     .then(response => {
        //         this.setState({
        //             "allWines" : response
        //             //"selectedWines" : response.dollarhide
        //         })
        //     });
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
    onChangeUpdateEventInfo = (text, field) => {
        let eventInfo = this.state.eventInfo;
        eventInfo[field] = text;
        this.setState({
            eventInfo
        })
    }
    toggleSheetInfo = (field) => {
        let sheetIncludes = this.state.sheetIncludes;
        sheetIncludes[field] = !sheetIncludes[field];
        this.setState({
            sheetIncludes
        })
    }
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
                changeView={this.changeView}
            ></SelectWines>
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
                    selectedWines={this.state.selectedWines}
                    eventInfo={this.state.eventInfo}
                    sheetIncludes={this.state.sheetIncludes}
                    changeView={this.changeView}
                ></SheetPreview>
            ))}
        </div>
          <Footer></Footer>
      </div>
    );
  }
}

export default App;
