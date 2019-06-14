import React, { Component } from 'react';


class Subscriptions extends Component {

    constructor(props){
        super(props);
        this.state= {
          email: '',
          error: false,
          success: false
        }
    }

    clearMessages() {
        setTimeout(function(){
                this.setState({
                    error:false,
                    success:false
                })
        }.bind(this),5000)
    }
    

    saveSubscription = (email) => {
        const URL_EMAIL = 'http://localhost:3004/subcriptions';

        fetch(URL_EMAIL, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email})
        }).then(res=>res.json())
        .then(()=>{
            this.setState({
                email:'',
                success:true
            })
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let email = this.state.email;
        let regex = /\S+@\S+\.\S+/; // dh 3shan valid email regular expression

        if(regex.test(email)){
            this.saveSubscription(email);
        }else{
            this.setState({error:true})
        }
        this.clearMessages()
    }

    onChangeInput = (event) => {
        this.setState({
            email: event.target.value
        })
    }

  render() {
    return (
      <div className='subscribe_panel'>
        <h3>subscribe to us</h3>
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='youremail@email.com' value={this.state.email}
                onChange={this.onChangeInput} />
                <div className={this.state.error ? 'error-show' : 'error'}>Check you email</div>
                <div className={this.state.success? 'success-show' : 'success'}>Thank you</div>
            </form>
        </div>
        <small>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
        </small>
      </div>
    )
  }

}

export default Subscriptions;
