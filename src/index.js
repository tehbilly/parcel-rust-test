import './scss/app.scss';

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';

import utils from '../Cargo.toml';

class RustyApp extends React.Component {
    constructor(props) {
        super(props);

        // Initial state
        this.state = {
            num: 10
        }

        // onClick functions
        this.incNum = () => this.setState({num: this.state.num + 1})
        this.decNum = () => {
            if (this.state.num > 0)
                this.setState({num: this.state.num - 1})
        }
    }
    
    async render() {
        return <div>
            <Header/>
            <div className="container">
                <div className="hero">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">Parcel + Rust(WASM)</h1>
                            <h2 className="subtitle">Easy Peasy, Lemon Squeezy</h2>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="media-content">
                        <div className="content">
                            <h4 className="title is-4">Adding Numbers</h4>
                            <p>
                                add({this.state.num}, {this.state.num * 2}) = <code>{utils.add(this.state.num, this.state.num * 2)}</code>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="media-content">
                        <div className="content">
                            <h4 className="title is-4">Fibonacci</h4>
                            <p>
                                fibonacci({this.state.num}) = <code>{JSON.stringify(utils.fibonacci(this.state.num), null, "  ")}</code>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="level">
                    <p className="level-item has-text-centered">
                        <span style={{marginRight: '1em'}}>
                            Adjust input values:
                        </span>
                        <button className="button is-small" onClick={this.incNum}>+</button>
                        <button className="button is-small" onClick={this.decNum} disabled={this.state.num <= 0}>-</button>
                    </p>
                </div>
            </div>
        </div>
    }
}

ReactDOM.render(
    <RustyApp/>,
    document.getElementById("app")
);
