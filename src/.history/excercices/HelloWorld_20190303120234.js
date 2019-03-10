class HelloWorld extends React.Component {
 
    // fires before component is mounted
    constructor(props) {
 
        // makes this refer to this component
        super(props);
 
        // set local state
        this.state = {
            date: new Date()
        };
 
    }
 
    render() {
        return (
            <h1>
                It is {this.state.date.toLocaleTimeString()}.
            </h1>
        )
    }
}