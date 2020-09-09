import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './LandingPage.css';

export class LandingPage extends Component {
    render() {
        return (
            <div>
                <header>
                    <NavLink to="/signup"><button>Sign Up</button></NavLink>
                    <NavLink to="/login"><button>Login</button></NavLink>
                </header>

				{/* Hero Section containing two buttons */}
                <div id="wrapper">
                    
                </div>
				{/* How it works section containing instructions */}
                <div id="wrapper1">

				</div>

				{/* Why it works section with statistics */}
                <div id="wrapper2">

				</div>

				{/* Testimonials/reviews section with cards */}
                <div id="wrapper3">

        		</div>
			
				{/* Footer with contact information */}
        )
    }
}

export default LandingPage
