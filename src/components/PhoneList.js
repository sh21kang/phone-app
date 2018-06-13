import React, {Component} from 'react';
import PhoneInfo from './PhoneInfo'

export default class PhoneList extends Component {

  static defaultProps = {
    data : []
  }
  shouldComponentUpdate(nextProps, nextState) {
      return nextProps.data !== this.props.data;
    }
    
  render(){
    const {data, onRemove, onUpdate} = this.props;
    const list = data.map(
      info => (<PhoneInfo
        key={info.id}
        info={info}
        onRemove={onRemove}
        onUpdate={onUpdate}
        />)
    );
    return(
      <div>
        {list}
      </div>
    );
  }
}
