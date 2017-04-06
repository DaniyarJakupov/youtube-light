import React, { Component } from 'react';
//==========================================================
//Class component
class SearchBar extends Component {
   // Initializing state in class based component
   constructor(props) {
      super(props);
      this.state = { term: "" };
   }
   //Methods
   render() {
      return (
         <div className="search-bar">
            <input
               value = {this.state.term}
               onChange={event => this.onInputChange(event.target.value)} />
         </div>
      );
   }

   onInputChange(term){
      this.setState({term});
      this.props.onSearchTermChange(term);
   }

}
//===========================================================
export default SearchBar;
