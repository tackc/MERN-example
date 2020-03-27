import React, { Component } from 'react';
import ReactTable from 'react-table';
import api from '../api';

import styled from 'styled-components';

import 'react-table/react-table.css';

class MoviesList extends Component {
    render() {
        return(
            <div>
                <p>On this page, you'll see the list of movies!</p>
            </div>
        )
    }
}

export default MoviesList;