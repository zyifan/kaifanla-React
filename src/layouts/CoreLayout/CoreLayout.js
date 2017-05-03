import React from 'react'
import Header from '../../components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'
//import Home from  '../../routes/Home'

export const CoreLayout = ({ children }) => (
  <div>
    <Header />
    <div className='core-layout__viewport'>
      {children}
    </div>
  </div>
);

/*CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}*/

export default CoreLayout
