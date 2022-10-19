import axios from 'axios';
import React, { Component } from 'react';

class Search extends Component {
    state = { ar: [] };
    searchInput = React.createRef();
    componentDidMount() {
        this.doApi();
    }

    doApi = () => {
        let searchQ = this.searchInput.current.value;
        let url = `https://pixabay.com/api/?key=15489555-318fcca1200a48f374a1ce3ea&q=${searchQ}&image_type=photo&pretty=true`;
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                this.setState({ ar: data.hits });
            });
    }

    render() {
        return (
            <div className=''>
                <div className="col-md-6 d-flex p-2">
                    <input defaultValue="sun" ref={this.searchInput} className='form-control me-1' />
                    <button onClick={this.doApi} className='btn btn-success'>Search</button>
                </div>
                <div className="row">
                    {this.state.ar ? this.state.ar.map(item => {
                        return (
                            <div key={item.id} className='col-md-4 p-1 border h-5' onClick={() => {
                                alert("Image source:   " + item.pageURL);
                            }}>
                                <img  className='w-100' height={250} src={item.previewURL} alt={item.tags} />
                            </div>
                        )
                    }) : ""}
                </div>
            </div>
        )
    }
}

export default Search 