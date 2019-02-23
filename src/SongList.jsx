import React, { Component } from 'react';
import {List, Tag, Avatar,Row, Col, Statistic} from 'antd'
import './App.css';
const skipTags =[ 'name', 'artists', 'key', 'mode', 'duration_ms', 'time_signature','rank']
class SongList extends Component {
    constructor() {
        super();
    }
    populatetags(song) {
        var keys = Object.keys(song).filter(field => !skipTags.includes(field));;
        var tags = [];
        keys.forEach(function(k){
            tags.push(<Col span={3}> {k} : <b>{song[k]}</b></Col>,)
        })
        return tags;
    }
  render() {
    return (
        <List
        style={{marginTop:20}}
        itemLayout="horizontal"
        dataSource={this.props.songs}
        renderItem={s => (
          <List.Item style={{padding: 10,background: '#f2f4f8',marginBottom:20}} keys={s._id}>
            <List.Item.Meta
              keys={s._id}
              title={
                <Row gutter={16}>
                    <Col span={6}>
                        <Statistic title="Rank" value={s.rank} />
                    </Col>
                    <Col span={6}>
                        <Statistic title="Song Name" value={s.name} />
                    </Col>
                    <Col span={6}>
                        <Statistic title="Artist" value={s.artists} />
                    </Col>
                    <Col span={6}>
                       <Statistic title="Duration" value={((s.duration_ms/60000)).toFixed(2)+ ' Min'} />
                    </Col>
                </Row>
                }
              description={<div><Row gutter={16} style={{marginTop:20,padding:10}}>{this.populatetags(s)}</Row></div>}
            />
          </List.Item>)} />
    );
  }
}

export default SongList;