import React from 'react'

import './Footer.css'

const footer = () => (
  <div className="footer">
    <p className="footer-copyright">
      &copy; Sample Inc. {new Date().getFullYear()}
    </p>
  </div>
)

export default footer
