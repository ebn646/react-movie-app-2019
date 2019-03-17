import React,{Component} from 'react'
import { connect } from 'react-redux'
import { search } from '../../actions'
import Autosuggest from 'react-autosuggest'
import Styles from './searchbar.css'
import data from './data'
import Navbar from 'react-bootstrap/Navbar'

const getSuggestionValue = suggestion => suggestion.title

const renderSuggestion = suggestion => <a href={`/movie/${suggestion.id}`}>{suggestion.title}</a>

const getSuggestions = value => {
    const escapedValue = value.trim()
  
    if (escapedValue === '') {
      return [];
    }
  
    const regex = new RegExp('^' + escapedValue, 'i');
  
    return data.filter(data => regex.test(data.name));
}
  
class SearchBar extends Component{
    constructor() {
        super();
    
        this.state = {
          value: '',
          suggestions: []
        };
    }
    componentDidMount(){
        this.props.search('fight')
    }

    onChange = (event, { newValue }) => {
        this.setState({
          value: newValue
        });
    }

    onSuggestionsFetchRequested = ({ value }) => {
        console.log('search results = ',this.props.searchResults)
        this.setState({
          suggestions: this.props.searchResults
        });
    }

    onSuggestionsClearRequested = () => {
        this.setState({
          suggestions: []
        });
    }

    render(){
        const { value, suggestions } = this.state;
        const inputProps = {
          placeholder: "Type 'f'",
          value,
          onChange: this.onChange
        };

        return(
        <div>
            <div className={Styles.autosuggest}>
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
                id="basic-example"
            />
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        searchResults: state.searchResults
    }
}
const mapDispatchToProps = {
    search
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar)