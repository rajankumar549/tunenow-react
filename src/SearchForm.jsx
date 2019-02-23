import React, { Component } from 'react';
import {Input, Tag, Avatar, Row, Col, Select} from 'antd'
import './App.css';
const Search = Input.Search;
const Option = Select.Option;
class SearchForm extends Component {

    constructor(){
        super();
        this.state = {
            search: '', 
            sortOn: 'rank'
        }
    }
  
    componentDidMount() {
        this.fetchSongs();
    }
    fetchSongs = () => {
        fetch(`https://tunenow.herokuapp.com/api/songs?search=${this.state.search}&sortOn=${this.state.sortOn}`)
        .then(res => res.json())
        .then(
        (result) => {
            this.props.setSongData(result.data.songs)
        },
        (error) => {
        } )
    }
    onSearchChange = (text) => {
        this.state.search = text;
        if (text.length > 2 || !text.length) {
            this.fetchSongs();
        }
    }
    onSortByChange = (value) => {
        this.state.sortOn = value;
        this.fetchSongs();
    }
    render() {
    return (
        <Row gutter={16}>
            <Col span={16}>
                <Search
                placeholder="input search text"
                onSearch={this.onSearchChange}
                enterButton
                />
            </Col>
            <Col span={8}>
            <label>Sort By : </label>
            <Select defaultValue="rank" style={{ width: 120 }} onChange={this.onSortByChange}>
                <Option value="duration_ms">Time</Option>
                <Option value="name">Name</Option>
                <Option value="artists">Artists</Option>
                <Option value="rank">Rank</Option>
            </Select>
            </Col>
        </Row>
        
    );
  }
}

export default SearchForm;