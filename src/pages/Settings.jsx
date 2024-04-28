import React, { useState } from 'react';

function Settings({ theme, onChangeTheme }) {
  return (
    <div className='settings-content'>
      <label className='theme-label'>Theme Selection</label>
      <select className ='theme-select' value={theme} onChange={ (e) => onChangeTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}

export default Settings;
