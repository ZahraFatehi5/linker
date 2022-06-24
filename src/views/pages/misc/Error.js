// ** React Imports
import { Link } from 'react-router-dom'

// ** Reactstrap Imports
import { Button } from 'reactstrap'
import { ReactComponent as Icon } from '@src/assets/images/svg/logo.svg'

// ** Custom Hooks
import { useSkin } from '@hooks/useSkin'

// ** Styles
import '@styles/base/pages/page-misc.scss'

const Error = () => {
  // ** Hooks
  const { skin } = useSkin()

  const illustration = skin === 'dark' ? 'error-dark.svg' : 'error.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default
  return (
    <div className='misc-wrapper'>
      <a className='brand-logo' href='/'>
      <Icon fill="7676F1" />
        <h2 className='brand-text text-primary ms-1'>Linker</h2>
      </a>
      <div className='misc-inner p-2 p-sm-3'>
        <div className='w-100 text-center'>
          <h2 className='mb-1'>صفحه یافت نشد 🕵🏻‍♀️</h2>
          <p className='mb-2'>اوه! 😖 آدرس مدنظر یافت نشد</p>
          <Button tag={Link} to='/' color='primary' className='btn-sm-block mb-2'>
            برگشتن به خانه
          </Button>
          <img className='img-fluid' src={source} alt='Not authorized page' />
        </div>
      </div>
    </div>
  )
}
export default Error
