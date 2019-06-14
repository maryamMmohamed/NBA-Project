import React, { Component } from 'react';

const URL_HOME = 'http://localhost:3004/teams';

class Poll extends Component{
    constructor(props){
        super(props)

        this.state = {
            pollTeams:[]
        }
    }


    fetchPoll(){
        fetch(`${URL_HOME}?poll=true&_sort=count&_order=desc`, { method: 'GET'})
        .then(response => response.json())
        .then(json => {
            this.setState({pollTeams:json})
        })
    }

    componentDidMount() {
       this.fetchPoll()
    }

    addCount(count,id){
        fetch(`${URL_HOME}/${id}`, {
        method: 'PATCH', // 3shan a3ml update f data b3ml put aw patch elfar2 en put: lazm ab3t object kaml 3shan lw msh kaml hyrg3 null 
        //f msh mo7bz eny ast5dmo 3shan kda bst5dm patch , patch: byb2a feh actions gowaha add,remove,... 
        //lma bklmha b action dh byro7 y3dl data hnak f database
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({count:count + 1})
        })
        .then(()=>{
            this.fetchPoll()
        });
    }

    renderPoll(){
        const positions= ['1ST','2ND','3RD']
        return this.state.pollTeams.map((item,index)=>{
            return(
                <div key={item.id} className="poll_item" onClick={()=>this.addCount(item.count,item.id)}>
                    <img alt={item.name} src={`/images/teams/${item.logo}`}/>
                    <h4>{positions[index]}</h4>
                    <div>{item.count} Votes</div>
                </div>
            )
        })
    }



    render(){
        return(
            <div className="home_poll">
                <h3>Who will be the next champion ?</h3>
                <div className="poll_container">
                    {this.renderPoll()}
                </div>
            </div>
        )
    }


}

export default Poll;