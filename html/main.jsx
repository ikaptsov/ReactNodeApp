class Signin extends React.Component {
    constructor(props) {
		super(props);
		this.signIn = this.signIn.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.state = {
		  email:'',
		  password:''
		};
	}
	
	render() {
        return (
			<form className="form-signin">
                <h2 className="form-signin-heading"> Please sign in </h2>
                <label for="inputEmail" onChange={this.handleEmailChange} className="sr-only"> Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                <label for="inputPassword" onChange={this.handlePasswordChange} className="sr-only"> Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                <button className="btn btn-lg btn-primary btn-block" onClick={this.signIn} type="button"> Sign in</button>
            </form>
        )
    }
	
	handleEmailChange(e){
		this.setState({email:e.target.value})
	}
	
	handlePasswordChange(e){
		this.setState({password:e.target.value})
	}
	
	signIn(){
		alert('Email address is ' + this.state.email + ' Password is ' + this.state.password);            
		axios.post('/signin', {
			email: this.state.email,
			password: this.state.password
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
	}
	
	
	
}
ReactDOM.render(<Signin />,document.getElementById('app'));