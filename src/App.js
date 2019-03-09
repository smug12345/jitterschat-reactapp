// src/App.js

    import React, { Component } from 'react';
    import ChatMessage from './Components/ChatMessage';
    import Signup from './Components/Signup'; 
    import ChatApp from './Components/ChatApp';


    const Chatkit = require("@pusher/chatkit-server");
    const chatkit = new Chatkit.default({
      instanceLocator: "v1:us1:f512ee82-9f4f-4a3e-8997-01159fdd20f9",
      key: "b561257a-40e5-494b-811b-a84adcf1483b:fQ/iUh+BdbcuDWomb+Bql7XepInTz/k558yLsLoMYas="
    })

    class App extends Component {
      constructor(props) {
          super(props);
          this.state = {
            currentUsername: '',
            currentId: '',
            currentView: 'Signup'
          }
          this.changeView = this.changeView.bind(this);
          this.createUser = this.createUser.bind(this);
 
      }

      createUser(username)
      {
        chatkit.createUser({
                id: username,
                name: username,
            })
            .then((currentUser) => {
                this.setState({
                    currentUsername: username,
                    currentId: username,
                    currentView: 'ChatApp'
                })
            }).catch((err) => {
                     if(err.status === 400) {
                    this.setState({
                        currentUsername: username,
                        currentId: username,
                        currentView: 'ChatApp'
                    })
                } else {
                    console.log(err.status);
                }
            });
      }

      changeView(view) {
          this.setState({
              currentView: view
          })
      }

      render() {
            let view ='';

            if (this.state.currentView === "ChatMessage") {
                view = <ChatMessage  changeView={this.changeView}/>
            } else if (this.state.currentView === "Signup") {
                view = <Signup onSubmit={this.createUser}/>
            } else if (this.state.currentView === "ChatApp") {
                view = <ChatApp currentId={this.state.currentId} />
            }
            return (
                <div className="App">
                    {view}
                </div>
            );
        }
    }
    export default App;