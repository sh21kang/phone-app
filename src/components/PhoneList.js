import React, {Component} from 'react';
import PhoneInfo from './PhoneInfo'

export default class PhoneList extends Component {

  static defaultProps = {
    data : []
  }

  render(){
    const {data, onRemove} = this.props;
    const list = data.map(
      info => (<PhoneInfo
        key={info.id}
        info={info}
        onRemove={onRemove}
        />)
    );
    return(
      <div>
        {list}
      </div>
    );
  }
}
