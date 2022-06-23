// ** React Imports
import { Fragment } from 'react'


// ** Custom Components
import NavbarUser from './NavbarUser'
// import NavbarBookmarks from './NavbarBookmarks'

const ThemeNavbar = props => {
  // ** Props
  const { skin, setSkin
    //  setMenuVisibility 
    } = props

  return (
    <Fragment>
    <div className='navbar-container d-flex content'>
      <div className='bookmark-wrapper d-flex align-items-center'>
      <NavbarUser skin={skin} setSkin={setSkin} />
        {/* <NavbarBookmarks setMenuVisibility={setMenuVisibility} /> */}
      </div>
      </div>
    </Fragment>
  )
}

export default ThemeNavbar
