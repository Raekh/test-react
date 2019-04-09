import React from 'react';
import ReactDOM from 'react-dom';


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
				<Title label={this.props.title} />
				<Paragraph text={this.props.text} />
				<Box title="test box" objects={this.state.objects} />
			</div>
		)
	}
}

ReactDOM.render(
	<Main title="React" text="Hello World!"/>,
	document.getElementById('react-app')
)
