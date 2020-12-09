import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

import FeedEditorTab from './FeedEditorTab';
import {changeFeedEditorTab, closeFeedEditor, deleteFeedEditorTab, addFeedEditorTab} from '../actions/feedEditorActions';
import settings from '../configuration/Settings.js';


import XlsxManager from '../core/XlsxManager.js';

class FeedsEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabValue: 0,
      newTextareaIndex: null,
      testFeeds: {},
      feedsContent: null,
      sheet:null,
    };
    this.store = this.props.store;
    this.handleChange=this.handleChange.bind(this);
    this.handleCloseFeedEditor = this.handleCloseFeedEditor.bind(this);
    this.handleDeleteFeedEditorTab = this.handleDeleteFeedEditorTab.bind(this);
    this.handleAddFeedEditorTab = this.handleAddFeedEditorTab.bind(this);

    this.source="";
    this.xlsxManager=new XlsxManager();
  }

  componentDidMount() {
    this.unsubscribe=this.store.subscribe(()=>{this.onStoreChange()});
    this.mounted=true;
    this.onStoreChange();
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    this.mounted=false;
  }

  getFeedSource(modifyFeeds) {
    if ((modifyFeeds)&&(modifyFeeds.length>0)) {
      return modifyFeeds[0].src;
    }
    return null;
  }

  getFeedSheet(modifyFeeds) {
    if ((modifyFeeds)&&(modifyFeeds.length>0)) {
      return modifyFeeds[0].sheet;
    }
    return null;
  }

  onStoreChange() {
    if (this.mounted) {
      let state=this.store.getState();

      let newSource=this.getFeedSource(state.modifyFeeds);
      let newSheet=this.getFeedSheet(state.modifyFeeds);

      if (newSource!==this.source) {
        this.source=newSource;
        if (this.source!=null) {
          console.log(this.source);

          let loadUrl="../"+this.source;

          if (settings.isDev) {
            loadUrl=this.source;
          }

          this.xlsxManager.load(loadUrl,(data)=>{
            this.setState({
              ...this.state,
              feedsContent:data,
              sheet:newSheet,
            });
          });

        } else {
          this.setState({
            ...this.state,
            feedsContent:[],
            sheet:newSheet,
          });
        }
      } else {
        if (this.state.sheet!=newSheet) {
          this.setState({
            ...this.state,
            sheet:newSheet,
          });
        }
      }
    }
  }

  a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  handleChange(event, newValue) {
    this.store.dispatch(changeFeedEditorTab(newValue)
    )
  };

  handleCloseFeedEditor(event) {
    this.store.dispatch(closeFeedEditor()
    )
  };

  handleAddFeedEditorTab(event) {
    let activeTab = this.state.tabValue;
    this.store.dispatch(addFeedEditorTab(activeTab))
  };

  handleDeleteFeedEditorTab(event){
    this.store.dispatch(deleteFeedEditorTab()
    )
  };

  render() {
    let dialogChildren = [];
    //
    //


    if (
      (this.state.feedsContent)&&
      (this.state.sheet)
    ) {


      console.log(this.state.feedsContent);
      console.log("!!!!!!!!!!!!");
      console.log(this.state.sheet);


    }



    //
    //
    // let modify = this.state.modifyFeeds;
    // let listNumber = modify[0].sheet;
    // let feedsContent = this.state.feedsContent;
    //
    //
    // let feedsArray = [];
    // let listItem = feedsContent.find(item => item.id === listNumber);
    //
    // if (!listItem) {
    //   return null;
    // }
    //
    // let listItemContentArray = listItem.content;
    //
    // for (let i=0; i< listItemContentArray.length; i++) {
    //   let newFeed = Object.keys(listItemContentArray[i]);
    //   feedsArray.push(newFeed[0]);
    // }
    //
    // let tabsChildren = [];
    //
    // for (let i=0; i<feedsArray.length; i++) {
    //   tabsChildren.push(<Tab label={feedsArray[i]} {...this.a11yProps(i)} />);
    // }
    //
    // dialogChildren.push (
    //   <AppBar position="static">
    //     <Tabs value={this.state.tabValue} onChange={this.handleChange} aria-label="simple tabs example" style={{backgroundColor: "white", color: "black"}}>
    //       {tabsChildren}
    //     </Tabs>
    //   </AppBar>
    // );
    //
    // for (let i=0; i<feedsArray.length; i++) {
    //   dialogChildren.push(
    //     <FeedEditorTab store={this.store} value={i} index={i}/>
    //   )
    // }
    //
    dialogChildren.push(
      <Button
        id="AddFeedButton"
        key="AddFeedButton"
        size="small"
        style={{
          width: "10%",
          marginRight: 25,
          display: "flex",
          alignSelf: "flex-end",
          fontSize: 15,
          color: "white",
          backgroundColor: "grey"
        }}
        onClick={this.handleAddFeedEditorTab}>
            +
      </Button>
    );

    dialogChildren.push(
      <div

        id="buttonPanel"
        key="buttonPanel"

        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between"
        }}>
          <IconButton aria-label="delete" style={{width: "10%", margin: 25, display: "flex"}} onClick={this.handleDeleteFeedEditorTab}>
              <DeleteIcon fontSize="small" />
          </IconButton>

          <Button size="small" style={{width: "10%", margin: 25, display: "flex"}} onClick={this.handleCloseFeedEditor}>
              Закрыть
          </Button>
      </div>
    )

    return (
      <div style={{color: "black"}}>
        <Dialog
          open={true}
          maxWidth="lg"
          aria-labelledby="form-dialog-title"
          style={{
            backgroundColor: "white"
          }}>
          {dialogChildren}
        </Dialog>
      </div>
    );
  }
}


export default FeedsEditor

/*
dialogChildren.push(
          <IconButton aria-label="delete" style={{width: "10%", margin: 25, display: "flex", alignSelf: "flex-start"}}>
              <DeleteIcon fontSize="small" />
          </IconButton>
        )

alignSelf: "flex-end"
alignSelf: "flex-start"
*/
