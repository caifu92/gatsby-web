import React, { Component } from 'react'

export default class ContactForm extends Component {
  componentDidMount() {
    const loadScript = src => {
      let tag = document.createElement('script');
      tag.async = false;
      tag.src = src;
      let body = document.body;
      body.appendChild(tag);
    }

    const loadStyle = href => {
      let link = document.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = href;
      let body = document.body;
      body.appendChild(link);
    }

    loadScript('//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js');
    loadScript('/static/form-messages.js');
    loadStyle('//cdn-images.mailchimp.com/embedcode/classic-10_7.css');
  }

  render() {
    return (
      <div id="mc_embed_signup" style={{background:"#fff", clear:"left", font:"14px Helvetica,Arial,sans-serif"}}>
        <h2 style={{textAlign: "center"}}>Entre em contato</h2>
        {/* FIXME: Need to add the STOQ endpoint on the action */}
        <form action="https://stoq.us4.list-manage.com/subscribe/post?u=a7477b9a2da031dded08fa020&amp;id=5d2bfdb2bd" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <div className="mc-field-group">
          	<label>
              Email <span className="asterisk">*</span>
          	  <input size="60" type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
            </label>
          </div>

          <div className="mc-field-group">
          	<label>
              Nome <span className="asterisk">*</span>
          	  <input type="text" name="FNAME" className="required" id="mce-FNAME" />
            </label>
          </div>

          <div className="mc-field-group">
          	<label>
              Sobrenome <span className="asterisk">*</span>
          	  <input type="text" name="LNAME" className="required" id="mce-LNAME" />
            </label>
          </div>

          <div class="mc-field-group size1of2">
          	<label for="mce-PHONE">Telefone  <span class="asterisk">*</span>
          	  <input type="text" name="PHONE" class="required" id="mce-PHONE" />
            </label>
          </div>
          <div class="mc-field-group">
          	<label for="mce-COMPANY">Empresa </label>
          	<input type="text" name="COMPANY" class="" id="mce-COMPANY" />
          </div>

          <div id="mce-responses" className="clear">
        		<div className="response" id="mce-error-response" style={{display:"none"}}></div>
        		<div className="response" id="mce-success-response" style={{display:"none"}}></div>
        	</div>
          <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
            <input type="text" name="b_a7477b9a2da031dded08fa020_5d2bfdb2bd" tabIndex="-1" />
          </div>
          <div className="clear">
            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
          </div>
        </form>
      </div>
    );
  }
};