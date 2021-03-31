import React from 'react';
import axios from 'axios';
import '../../scss/newsletter.scss';
import Buttons from '../../components/Common/Buttons';


class Newsletter extends React.Component {
   state = { message: "Enviando Messagem..." };

   constructor(props) {
      super(props)

      this.state = {
         name: '',
         email: '',
      }
  }

handleChange = (e) => {
   this.setState({[e.target.name]: e.target.value})
}


handleSubmit = e => {
   e.preventDefault()
  //  console.log(this.state)
   axios.post('https://corebiz-test.herokuapp.com/api/v1/newsletter', this.state)
  .then(response => {
      console.log('Enviado...', response)
      alert("Mensagem Enviada com sucesso")
      this.setState({
         name: '',
         email: ''
       });
   })
   .catch(error => {
      console.log(error)
      alert("Mensagem não enviada, por favor tente novamente")
   })
}

   render() {
      const { name, email } = this.state

      return (
         <div className="newsletter">
            <div className="newsletter__content">
            <h2>
              Participe de nossas news com promoções e novidades!
            </h2>
            <form onSubmit={this.handleSubmit} className="newsletter__register">
              <input
                  placeholder="Digite seu nome"
                  type="text"
                  name="name"
                  value={name}
                  className="newsletter__input"
                  onChange={this.handleChange}
              />
              <input
                  placeholder="Digite seu email"
                  type="email"
                  name="email"
                  value={email}
                  className="newsletter__input"
                  onChange={this.handleChange}
              />
              <Buttons id='newsletter__button' value='Eu quero!'></Buttons>
            </form>

            <div> {this.state.message} </div>
          </div>
         </div>
      );
   }
}




export default Newsletter;