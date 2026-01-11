import React from 'react'
import './settings.css'

const settings = () => {
  return (
<div>
<div className='container'>
<div className='row'>
<div className='section__title page__title'>Settings</div>
<div className='setting__content'>
    <div className='settings__sub--title'>Your Subscription Plan</div>
    <div className='settings__text'>Premium</div>
</div>
<div className='setting__content'>
    <div className='settings__sub--title'>Email</div>
    <div className='settings__text'>user@gmail.com</div>
</div>
</div>
</div>
</div>
)
}

export default settings
