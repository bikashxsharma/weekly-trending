import React, {Component} from 'react';

class Maindata extends React.Component{
            constructor(props){
                    super(props);
                    {/* setting initial state for getting repos as an array fro API, 
                    sortType for sorting, and isLoaded for checking API success*/}
                    this.state={
                        isLoaded:false, 
                        repos:[],
                        sortType:''
                    }

            }
    /*Fetching data from URL*/     
    componentDidMount(){
        const url='https://github-trending-api.now.sh/repositories?since=weekly';
        fetch(url)
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                isLoaded:true,
                repos:json,
            })
        }).catch(err=>console.log(err));

    }        

    render(){
        const{isLoaded, repos}=this.state;
        if(!isLoaded){
            return(<div>Loading....</div>);
        }else{
            return(
                <div>
                    <h2>Fresh from the press.</h2>
                    {
                        repos.map((repo,id)=>(
                            <div key={id} >
                                {repo.author}
                            </div>
                        ))
                    }

                </div>
            );
           
            
        }
       
    }

}



export default Maindata;