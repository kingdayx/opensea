import React from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
  return (
    <div className="header">
      <img
        src="images/logo.webp"
        alt="logo"
        style={{ height: 32, width: 32 }}
      />
      <span className="name">Opensea</span>
      <div className="search">
        <FontAwesomeIcon className="mag" icon={faSearch} />
        <input
          type="text"
          className="input"
          placeholder="Search items, collections, and accounts"
        />
      </div>
      <div className="nav">
        <div className="nav1">Browse</div>
        <div className="nav1">Activity</div>
        <div className="nav1">Blog</div>
        <div className="nav1">Community</div>
        <div className="nav1">Create</div>
      </div>
    </div>
  )
}

export default Header
