 // src/Components/Signup.js

    import React, {Component} from 'react';

    class  Signup extends Component {
        constructor(props) {
            super(props);
            this.state = {
                username: "",
            }
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleChange(e) {
            this.setState({username: e.target.value});
        }
        handleSubmit(e) {
            e.preventDefault()
            this.props.onSubmit(this.state.username);
        }
        render() {
            return(
                <div className="form-container">
                    <h1>Welcome to Jitters</h1>
                    <form onSubmit={this.handleSubmit} className="form">
                        <label htmlFor="email"> <h2> Enter your mail ID </h2></label>
                        <input type="email" name="username" onChange={this.handleChange} className="input" />
                        <button className="submit">Submit</button>
                    </form>
                </div>
            )
        }
    }
    export default Signup;