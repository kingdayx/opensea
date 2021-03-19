import React from 'react'
import './styles.css'

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
  return (
    <div className="header">
      <div>Opensea</div>
    </div>
  )
}

export default Header
