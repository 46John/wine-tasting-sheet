import React, {Component} from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, PDFViewer, Image, Font} from '@react-pdf/renderer';

class SheetPreview extends Component{
    state = {
        loadFinished: false
    }
    shouldComponentUpdate(){
        return true;
    }
    setLoadStatus = () => {
        this.setState({
            loadFinished: true
        });
    };

    formatTime = (time) => {
        let formattedTime = [];
        let unformattedTime = time.split(":");
        if(unformattedTime[0] > 12){
            formattedTime[0] = unformattedTime[0] - 12;
        }else{
            formattedTime[0] = unformattedTime[0];
        }
        formattedTime[1] = unformattedTime[1]
        return formattedTime.join(':');
    }
    render(){
        const {
            selectedProducts,
            eventInfo,
            sheetOptions,
            changeView
        } = this.props;

        Font.register({
            family:'Roboto Condensed', src: '/fonts/RobotoCondensed-Regular.ttf'
        });
        Font.register({
            family:'EB Garamond Bold', src: '/fonts/ebgaramond-bold-webfont.ttf', fontWeight: 'bold'
        });

        Font.register({
            family:'EB Garamond', src: 'https://fonts.gstatic.com/s/ebgaramond/v7/kYZt1bJ8UsGAPRGnkXPeFZ0EAVxt0G0biEntp43Qt6E.ttf'
        });

        const tastingSheet = (
            <Document>
                <Page size="A4" style={{
                    padding: '10pt 10pt 50pt 10pt',
                    fontFamily: 'EB Garamond'
                }}
                wrap={true}
                >
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'nowrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'stretch',
                        textAlign: 'center'
                    }}>
                        <Image
                            src="img/st-supery-logo.png"
                            style={{
                                maxWidth: '200',
                                height:"30",
                                marginBottom : '20pt',
                                marginTop: '10pt',
                                flex: '0 1'
                            }}

                        />
                        {eventInfo.eventName !== '' && (
                            <View style={{
                                width: "100%",
                                flex: '0 1',
                                fontSize: '12pt'
                            }}>
                                <Text>{eventInfo.eventName}{eventInfo.eventVenue ? " - " + eventInfo.eventVenue : ""}</Text>
                            </View>

                        )}
                        {eventInfo.eventDate !== '' &&(
                            <Text style={{
                                width: "100%",
                                flex: '0 1',
                                fontSize: '12pt'
                            }}>{eventInfo.eventDate}{eventInfo.eventTime !== '' ? ', ' + this.formatTime(eventInfo.eventTime.toString()) : ''}</Text>
                        )}
                        {eventInfo.eventName !== '' && (
                            <Text style={{
                                width: "100%",
                                flex: '0 1',
                                fontSize: '12pt'
                            }}>Presented by: {eventInfo.eventPresenter}</Text>
                        )}
                        {sheetOptions.info === true && (
                            <View style={{
                                width: "100%",
                                flex: '0 1',
                                padding: '10pt 0',
                                marginBottom: 16
                            }}>
                                <Text style={{fontSize:12, textAlign: 'left'}}>St. Supéry Estate Vineyards & Winery is a sustainably farmed, estate winery in Napa Valley, California, with more than 500 acres of certified Napa Green vineyards. All of the grapes for St. Supéry Estates' wine portfolio, including the highly regarded Napa Valley Estate Sauvignon Blanc and Dollarhide and Rutherford vineyard designate Cabernet Sauvignon, are grown in two estate vineyards.</Text>
                            </View>
                        )}
                    </View>
                    <View>
                    {selectedProducts.map((wine, index) => (
                        <View key={index} style={{}} wrap={false}>
                            
                            <View style={{
                                width: '100%',
                                maxWidth: '100%',
                                display: 'flex',
                                flexDirection: 'row',
                                marginBottom: 16
                            }}
                            
                            >
                                {sheetOptions.images && (
                                    <View style={{display: 'flex'}}>
                                        <Image src={`${wine.img}`} style={{height: 60, width: 90,  alignSelf: 'center'}} />
                                    </View>
                                )}
                                <View style={{display: 'flex', flexDirection: "column", flex: 1, paddingLeft: 10}} >
                                    <View style={{width: '100%', marginBottom: '5pt'}}>
                                        <Text style={{fontSize: 16, fontWeight: 'bold', fontFamily: 'Roboto Condensed'}}>{wine.name}{sheetOptions.price ? " - $" + wine.customPrice : ""} (SRP)</Text>
                                    </View>
                                        {sheetOptions.notes && (
                                            <View style={{fontSize: "14pt", marginBottom: 10}}>
                                                <Text style={{fontWeight: '700', marginBottom: '2pt', fontFamily: 'EB Garamond Bold', fontSize: 12}}>Winemaker's Notes:</Text>
                                                <Text >{wine.tastingNotes}</Text>
                                            </View>

                                        )}
                                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 10}}>
                                        {sheetOptions.ratings && (
                                                                                
                                            wine.ratings.map((rating, index) => <View style={{display: "flex", flexDirection: "row", flexWrap: 'wrap', marginRight: 10}} key={index}>
                                                <Text style={{width: '40pt', fontSize: 12, backgroundColor: '#962b2b', color: 'white', textAlign: 'center'}}>{rating.value}</Text>
                                                <Text style={{fontSize: 12, width: 'auto', borderWidth: 1, paddingLeft: 10, paddingRight: 10}}>{rating.name}</Text>
                                            </View>)

                                        )}
                                    </View>
                                    

                                </View>
                            </View>
                        </View>
                    ))}
                    </View>
                    <View style={{
                        position:'absolute',
                        bottom:10,
                        left:0,
                        right:0,
                        fontSize: '12',
                        textAlign: 'center'
                    }} fixed>
                        <Text>St. Supéry Estate Vineyards & Winery</Text>
                        <Text>8440 St. Helena Highway • Rutherford, CA 94573 • www.stsupery.com</Text>
                    </View>
                </Page>
            </Document>
        );
        return(
            <div className="row">
                <div className="col-12">
                    <div className="view-instructions">
                        <h2>Tasting Sheet Preview</h2>
                        
                            <PDFDownloadLink document={tastingSheet} fileName="StSupery-Tasting-Sheet.pdf" className="d-block d-lg-none" target="_blank">
                                {({ blob, url, loading, error }) => {
                                    if(loading){
                                        return 'Loading document...';
                                    }else{
                                        if(!this.state.loadFinished){
                                            this.setLoadStatus();
                                        }
                                        return 'Download Now!';
                                    }
                                }}
                            </PDFDownloadLink>
                        
                        <div className="controls">
                            <button className="back-button button-large" onClick={() => changeView('sheet-preferences')}>Back</button>
                        </div>
                    </div>
                </div>
                <div>

                </div>
                <div className="col-12 d-none d-lg-flex">
                {this.state.loadFinished && (
                    <PDFViewer width="100%" height="800px">
                        {tastingSheet}
                    </PDFViewer>
                )}
                </div>
            </div>
        )
    }
}
export default SheetPreview;