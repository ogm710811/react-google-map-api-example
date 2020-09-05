import React from 'react'

import Form from "./form/Form";
import Info from "./info/Info";

import './ContactSection.css'


const contactSection = () => (
  <>
    <div className="contact-section">
      <Form />
      <Info />
    </div>
  </>
)
export default contactSection
