import * as AccUtils from "../accUtils";
import * as ko from "knockout";
import * as $ from 'jquery';
import "ojs/ojknockout";
import "ojs/ojinputtext";
import "ojs/ojlabel";
import "ojs/ojformlayout";
import ArrayListDataProvider = require("ojs/ojarraydataprovider");
import "ojs/ojlistview";
import "ojs/ojavatar";
import "ojs/ojlistitemlayout";
import { autoBotService } from "../services/service";

class DashboardViewModel {

  discussionArray: ko.ObservableArray<{value: string, type: string, user: string}>;
  questionText: ko.Observable<string>;
  questionDataProvider;

  constructor() {
    this.discussionArray = ko.observableArray();
    this.questionText = ko.observable();
    this.questionDataProvider = new ArrayListDataProvider(this.discussionArray, {
      keyAttributes: "value",
    });
    // let speech = true;
    // window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    // const recognition = new SpeechRecognition();
    // recognition.interimResults = true;
    // const words = document.querySelector('.words');
  }

  /**
   * Optional ViewModel method invoked after the View is inserted into the
   * document DOM.  The application can put logic that requires the DOM being
   * attached here.
   */
  connected(): void {
    AccUtils.announce("Dashboard page loaded.");
    document.title = "Dashboard";
    
  }

  /**
   * Optional ViewModel method invoked after the View is disconnected from the DOM.
   */
  disconnected(): void {
    
  }

  sendChat = () => {
    console.log("sending to assistant service");
    this.discussionArray.push({"type": "Q", "value" : this.questionText(), "user" : "User"});
    let payload = { "text" : this.questionText()};
    this.questionText('');
    autoBotService.postDataToAssistant(payload).then( data => {
      console.log(data);
      this.discussionArray.push({"type": "A", "value" : data , "user" : "Bot"});
    }); 
  }

  keyOnEnter = (d, e) => {
    if (e.keyCode === 13 && this.questionText().length > 0) {      
      this.sendChat();
    }
    return true;
  };

  /**
   * Optional ViewModel method invoked after transition to the new View is complete.
   * That includes any possible animation between the old and the new View.
   */
  transitionCompleted(): void {
    
  }
}

export = DashboardViewModel;
