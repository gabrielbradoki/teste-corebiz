import React from 'react';
import Buttons from '../../components/Common/Buttons';
import '../../scss/common.scss';
import logoCorebiz from '../../images/corebiz-footer.svg';
import logoVtex from '../../images/vtex-footer.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeadset } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
return (
<footer className="footer">
  <div className="footer__components">
    <div className="footer__components--item">
      <div className="row">
        <div className="column">
          <h2>Localização</h2>
          <strong>Avenida Andrômeda, 2000. Bloco 6 e 8</strong>
          <p>Alphavile SP</p>
          <p>brasil@corebiz.ag</p>
          <p>+55 11 3090 1039</p>
        </div>
      </div>
    </div>
      <div className="footer__components--item buttons">
        <Buttons id='footer__button' element={<FontAwesomeIcon icon={faEnvelope} />} value='ENTRE EM CONTATO'/>
        <Buttons id='footer__button' element={<FontAwesomeIcon icon={faHeadset} />} value='FALE COM O NOSSO CONSULTOR
        ONLINE' />
      </div>

      <div className="footer__components--item company">
        <div className='row'>
          <div className='column'>
            <small>Created By</small>
            <img src={logoCorebiz} alt="Create By Corebiz" />
          </div>
          <div className='column'>
            <small>Powered by</small>
            <img src={logoVtex} alt="Powered by VTEX" />
          </div>
        </div>
      </div>
    </div>
</footer>
)
}

export default Footer;