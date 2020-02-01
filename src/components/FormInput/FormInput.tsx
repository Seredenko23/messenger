import React, {Component} from 'react';
import './FormInput.scss'

interface Props {
  type: string;
  placeholder?: string;
  value: string;
  handler?: (event: React.FormEvent<HTMLInputElement>) => void;
  name: string;
  validate?: ((value: string) => string | null)[];
}

interface State {
  dirty: boolean;
}

class FormInput extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      dirty: false
    }
  }

  blurHandler = () => {
    this.setState({
      dirty:true
    })
  };

  render() {
    let {type, placeholder, value, handler, name, validate = []} = this.props;
    let errors: (string | null)[] = validate.map(validate => validate(value)).filter(err => err != null);

    return (
      <React.Fragment>
        <input className={`form-input ${errors.length && this.state.dirty ? 'err' : ''}`}
               type={type}
               value={value}
               placeholder={placeholder}
               onChange={handler}
               onBlur={this.blurHandler}
               name={name}
        />
        {errors.length > 0 && this.state.dirty && errors.map((err, index) => {
          return (<span key={index} className={"error"}>{ err }</span>)
        })}
      </React.Fragment>
    );
  }
}

export default FormInput;
