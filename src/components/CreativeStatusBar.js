import React, { Component } from 'react';
import settings from '../configuration/Settings'
import { openLink, formatWeight } from '../core/helpers'
import {
  passCreative,
 } from '../actions/appActions';

class CreativeStatusBar extends Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.state={
    }
    this.onDemoClick=this.onDemoClick.bind(this);
    this.passedCheckbox_changeHandler=this.passedCheckbox_changeHandler.bind(this);
    this.showError_clickHandler=this.showError_clickHandler.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState(
  //     {
  //       passed: this.props.passed,
  //     }
  //   )
  // }

  onDemoClick() {
    if (this.props.platform==="Static") {
      openLink(this.props.backupPath)
    } else {
      openLink(this.props.demoPath)
    }
  }

  passedCheckbox_changeHandler(event) {
    // console.log("passedCheckbox",event.target.checked);
    this.store.dispatch(
      passCreative(event.target.checked,this.props.name)
    );
  }

  showError_clickHandler(event) {
    if (this.props.lastError) {
      alert(this.props.lastError)
    }
  }

  render() {
    let children = [];
    children.push(this.props.children);
    let status=this.props.status;
    if (!status) status="empty";

    if ((this.props.status==="completed")||(this.props.status==="paused")) {
      if (this.props.demoPath) {
        children.push(
          <div key="demo" className="status-item demo-item" onClick={this.onDemoClick}>{settings.openTitle}</div>
        );

        let passed=this.props.passed;
        if (!passed) {
          passed=false;
        } else {
          passed=true;
        }

        children.push(
          <input
            key="passed"
            name="passed"
            type="checkbox"
            className="status-item"
            checked={passed}
            onChange={this.passedCheckbox_changeHandler}
          />
        );
      }
    }


    children.push(
      <div
        key="status"
        className="status-item"
        style={{
          color:settings.statuses[status].color,
          cursor:(this.props.lastError)?"pointer":"auto",
          textDecoration:(this.props.lastError)?"underline":"none",
        }}
        onClick={this.showError_clickHandler}
      >{settings.statuses[status].title}</div>
    );
    if (this.props.updateTime) {
      let time=new Date(this.props.updateTime);
      children.push(
        <div key="updateTime" className="status-item">{time.toLocaleTimeString()+" "+time.toLocaleDateString()}</div>
      );
    }

    if ((this.props.creativeWeight)||(this.props.backupWeight)) {
      let creativeWeight=this.props.creativeWeight;
      let backupWeight=this.props.backupWeight;
      let weight=formatWeight(creativeWeight)+"&nbsp;/&nbsp;"+formatWeight(backupWeight);
      children.push(
        <div key="weight" className="status-item" dangerouslySetInnerHTML={{ __html: weight }}></div>
      );
    }

    return React.createElement(
      'div',
      {
        id:'CreativeStatusBar',
        className:"creative-status-bar",
        style:{
        }
      },
      children
    );
  }
}

export default CreativeStatusBar;
