import React, {Component} from 'react';
import Contacts from './components/contacts';

class App extends Component {
    render() {
        return (
            <Contacts contacts={this.state.contacts} />
        )
    }

    state = {
        contacts: []
    };

        componentDidMount() {
            fetch('http://localhost:3010/posts')
            
            
            //fetch('http://jsonplaceholder.typicode.com/users')
            //fetch('http://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())
                .then((data) => {
                    this.setState({ contacts: data })
                })
                .catch(console.log)
        }
}

export default App;
