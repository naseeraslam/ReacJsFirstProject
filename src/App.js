import React,{Component} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Plan from'./Plan';
class App extends Component
{
  state={
    items:[],
    text:""
  } 
  handleChange = e =>
  {
     this.setState({text:e.target.value})
  }
  handleAdd = e =>
  {
     if(this.state.text !=="")
     {
        const item=[...this.state.items, this.state.text];
        this.setState({ items:item , text:"" });
     }
  }
  componentDidMount() {
    console.log("Component Mounted")
  }
    render()
    {
        return(
        <React.Fragment>
        <div class="container-fluid my-5">
              <div class="row">
                <div class="col-sm-6 mx-auto text-white shadow-lg p-3">
                   <h2 className="text-center" >Today's Plan</h2>
                   <div class="row">
                     <div className="col-9">
                     <input type="text" placeholder="write plan here" className="form-control" value={this.state.text} onChange={this.handleChange}/>
                     </div>
                     <div className="col-2">
                       <button className="btn btn-warning px-5 fw-bold" onClick={this.handleAdd}>Add</button>
                     </div>
                     <div className="container-fluid">
                       <ul class="list-unstyled row m-5">
                        {
                          this.state.items.map((value,i)=>
                           {
                            return <Plan key={i} id={i}   value={value}/>
                          })
                        }
                       </ul>
                     </div>
                     </div>  
                </div>

              </div>
            </div>
           
             
              
         </React.Fragment>
         )
        
    }
    
}
export default App;
