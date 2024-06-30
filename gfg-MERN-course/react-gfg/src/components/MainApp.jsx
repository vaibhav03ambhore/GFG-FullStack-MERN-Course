import { Component } from 'react'
import Users from './Users';
import Header from './Header';

export default class MainApp extends Component {

    state = {
        userData: [],
        oneUser: '' // To handle input value
    }

    componentDidMount() {
        const json = localStorage.getItem('gfg');
        const userData = JSON.parse(json);
        if (userData) {
            this.setState({ userData });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.userData !== this.state.userData) {
            const json = JSON.stringify(this.state.userData);
            localStorage.setItem('gfg', json);
        }
       
    }


   

    render() {

        return (
            <div>
                <Header props={this.state} props2={this.setState}/>
                <h1>List 📃 of Users 👇</h1>
                <hr />
                <Users userData={this.state.userData}/>
            </div>
        );
    }
}
