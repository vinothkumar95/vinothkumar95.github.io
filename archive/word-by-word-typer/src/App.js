import React from 'react';
import Typist from 'react-typist';
import TypeWriter from 'react-typewriter';
import '../node_modules/react-typist/dist/standalone/Typist.js'
import '../node_modules/react-typist/dist/standalone/Typist.css'
import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div id="content">
					<span className="container-fluid-typist">
						<div className="row-typist board-container">
							<span className="technologytyper">
								<Typist avgTypingDelay={60}>React JS, .NET - Xome Desk, ORM Dashboard</Typist>&nbsp;&nbsp;
								<Typist avgTypingDelay={110}>Others - Python, Node JS</Typist>
								<br />
								<div className="row">
									<div className="col-sm-6">
										<a href="index.html">
											<span className="textshowcase">Resume</span>&nbsp;
										</a>
									</div>
									<div className="col-sm-6">
										<a href="showcase.html">
											<span className="textshowcase">Showcase of Projects</span>
										</a>
									</div>
								</div>
							</span>
						</div>
					</span>
            </div>
        );
    }
}
