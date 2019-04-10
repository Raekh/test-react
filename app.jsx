import React from 'react';
import ReactDOM from 'react-dom';

class Love extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      love:""
    } 
    this.handleChange = this.handleChange.bind(this)
    this.getText = this.getText.bind(this)
  }
  
  handleChange = e=>{
    var t = e.target.value
    this.setState({
      love:t
    })
  }
  
  getText = () => {
    switch(this.state.love){
      case 'yes':
      return "Me too... 💜 "
      
      case 'no' :
      return ":<"
      
      default:
      return ''
    }
  }
  
  render() {
    return (
      <form>
      <fieldset>
        <legend>Do you love me? </legend>
        
        <LoveRadio onChange={this.handleChange} name="love" value="yes" text="Yes" />
        <LoveRadio onChange={this.handleChange} name="love" value="no" text="No" />
        <p>{this.getText()}</p>
     </fieldset>
     </form>
   ) 
  }
}

class LoveRadio extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      parentval: ''
    }
    this.change = this.change.bind(this) 
  } 
  
  change = e => {
    this.props.onChange(e) 
  }
  
  render() {
    return(
      <div>
      <input name={this.props.name} type='radio' value={this.props.value} onChange={this.change} />
      <label for={this.props.name}>{this.props.text}</label>
      </div>
      )
  }
}

class CustomObject extends React.Component{
	constructor(props){
		super(props);
		this.state = {}

		this.createObject = this.createObject.bind(this)
	}
	
	createObject(){
		const { type, properties } = this.props;
		console.log(this.props);
		switch(type){
			case 'text':
			return (
				<p>{properties.value}</p>
			)

			case 'input':
			return (
				<input name={properties.name} type={properties.inputType} placeholder={properties.placeholder}></input>
			)

			case 'checkbox':
			return (
				<div>
					<label for={properties.name}>{properties.label}</label>
					<input name={properties.name} type="checkbox"></input>
				</div>
			)

			default:
			return (
				<span>...</span>
			)
		}
	}

	render(){
		return(
			<div>
				{this.createObject()}
			</div>
		)
	}
}
class Box extends React.Component{
	render(){
		return(
			<fieldset>
				<legend>{this.props.title}</legend>
				{
					this.props.objects.map((object,key) => {
						return (
							<CustomObject key={key} type={object.type} properties={object.properties}/>
						)
					})
				}
			</fieldset>
		)
	}
}

class Title extends React.Component{
	render(){
		return (
			<h1 className="">{this.props.label}</h1>
		)
	}
}

class Paragraph extends React.Component{
	render(){
		return(
			<p className="">
				{this.props.text}
			</p>
		)
	}
}

class Main extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			objects:[
				{
					type:'text',
					properties:{
						'value':'Hey'
					}
				},
				{
					type:'input',
					properties:{
						'inputType':'text',
						'placeholder':'how much I care for you',
						'name':'my love'
					}
				},
				{
					type:'checkbox',
					properties:{
						'name':'love',
						'type':'checkbox',
						'label':'Do I love you ?'
					}
				}
			]
		};
	}

	render(){
		
		return(
			<div className="">
				<Love />
			</div>
		)
	}
}

ReactDOM.render(
	<Main title="React" text="Hello World!"/>,
	document.getElementById('react-app')
)
