import React, { Component } from 'react';
import ReactTable from 'react-table';
import api from '../api';

import styled from 'styled-components';

import 'react-table/react-table.css';

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class MoviesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true });

        await api.getAllMovies().then(movies => {
            this.setState({
                movies: movies.data.data,
                isLoading: false,
            })
        })
    }
    
    render() {
        const { movies, isLoading } = this.state;

        console.log('TCL: MoviesList -> render -> movies', movies);

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: 'true',
            },
            {
                Header: 'Rating',
                accessor: 'rating',
                filterable: 'true',
            },
            {
                Header: 'Time',
                accessor: 'time',
                Cell: props => <span>{props.value.join(' / ')}</span>,
            },
        ]
        
        return(
            <div>
                <p>On this page, you'll see the list of movies!</p>
            </div>
        )
    }
}

export default MoviesList;