import React from 'react';
import logo from '../logo.svg';



const Contacts = ({contacts}) => {
    return (
      <div>
          <nav className="navbar navbar-dark bg-dark">
              <a className="navbar-brand" href="/">
                <img src={logo} className="Gv-logo" alt="logo" />
                Tarjetas Personales
              </a>
          </nav>
          
          {contacts.map((contact, i) => (
                                          <div class="container">
                                           <div class="row">  
                                          <div className="col-md-4 " >
                                            <div className="card mt-4">
                                              <div className="card">
                                                <div className="card-body text-left">
                                                  {contact.nombre} {contact.apellido}<br/>
                                                  Empresa: {contact.empresa}<br/>
                                                  Puesto: {contact.puesto} <br/>
                                                  Celular: {contact.celular} <br/>
                                                  Telefono: {contact.telfijo} <br/>
                                                  email: {contact.email} <br/>
                                                </div>
                                             </div>
                                            </div>
                                          </div>
                                          
                                          <div className="col-md-4" >
                                            <div className="card mt-4">
                                              <div className="card">
                                                <div className="card-body text-left">
                                                  {contact.nombre} {contact.apellido}<br/>
                                                  Empresa: {contact.empresa}<br/>
                                                  Puesto: {contact.puesto} <br/>
                                                  Celular: {contact.celular} <br/>
                                                  Telefono: {contact.telfijo} <br/>
                                                  email: {contact.email} <br/>
                                                </div>
                                             </div>
                                            </div>
                                          </div>
                                          
                                          <div className="col-md-4" >
                                            <div className="card mt-4">
                                              <div className="card">
                                                <div className="card-body text-left">
                                                  {contact.nombre} {contact.apellido}<br/>
                                                  Empresa: {contact.empresa}<br/>
                                                  Puesto: {contact.puesto} <br/>
                                                  Celular: {contact.celular} <br/>
                                                  Telefono: {contact.telfijo} <br/>
                                                  email: {contact.email} <br/>
                                                </div>
                                             </div>
                                            </div>
                                          </div>
                                          
                                          </div>
                                          </div>
                                          ))}
      
      </div>
    )
};

export default Contacts