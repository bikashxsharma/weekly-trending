import React, {Component} from 'react';
import star from '../assets/star.svg'

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

                    this.handleChange=this.handleChange.bind(this);

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
    /*Function to sort data*/ 
    getSortedData(){
        let sortedRepos;
        if(this.state.sortType===''){
            sortedRepos=this.state.repos;

        } else if(this.state.sortType==='byLang'){
            sortedRepos= this.state.repos.sort((a,b)=>a.language > b.language ? 1 : -1);
                
        } else if(this.state.sortType==='byStars'){
            sortedRepos= this.state.repos.sort((a,b)=>a.currentPeriodStars < b.currentPeriodStars ? 1 : -1);
           
        }
        return sortedRepos;
    }
    /*handleChange will change the sortType state according to user selection*/ 
    handleChange(e){
        this.setState({sortType:e.target.value});
    }
    

    render(){
        const{isLoaded}=this.state;
        const sortedRepos = this.getSortedData();
        if(!isLoaded){
            return(<div className="main-contents"> <h2 className="main-content-title">Loading....</h2></div>);
        }else{
            return(
                <div className="main-contents">
                <h2 className="main-content-title">Fresh from the press.</h2>

            {/** Sorting dropdown  */}
              <div className="sort-filter">
                    <div className="sort-select">
                        <p className="grey">sort by  </p>
                        <select defaultValue="byStars" onChange={this.handleChange} value={this.state.value} >
                            <option value="byStars">stars</option>
                            <option value="byLang">language</option>

                        </select>
                     
                    </div> 
               </div> 
               
                
                {
                    
                    sortedRepos.map((repo, id) =>(
                    <div key={id} className="data-list">
                        <div className="list-left">
                        <h2 ><a href={repo.url} target="_blank"><span className="regular">{repo.author}/</span>{repo.name}</a></h2>
                        <p className="black">{repo.description}</p>
                        <p className="grey">{repo.language}. {repo.stars.toLocaleString()}</p>

                        </div>
                        <div className="list-right">
                        <img src={star} alt="star" /><p> {repo.currentPeriodStars.toLocaleString()} stars this week</p>
                        </div>    
                    
                   
                   
                    </div>
                    ))

                }

                <p className="seemore"><a href="http://github.com/trending" target="_blank">See more in Github</a></p>
            </div>
            );
           
            
        }
       
    }

}



export default Maindata;