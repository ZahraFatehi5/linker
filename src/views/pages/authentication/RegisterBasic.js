// ** React Imports
import { Link } from 'react-router-dom'

// ** Icons Imports
import { Facebook, Twitter, Mail, GitHub } from 'react-feather'

// ** Custom Components
import InputPasswordToggle from '@components/input-password-toggle'
import { ReactComponent as Icon } from '@src/assets/images/svg/logo.svg'

// ** Reactstrap Imports
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Form,
  Label,
  Input,
  Button
} from 'reactstrap'

// ** Styles
import '@styles/react/pages/page-authentication.scss'

const RegisterBasic = () => {
  return (
    <div className="auth-wrapper auth-basic px-2">
      <div className="auth-inner my-2">
        <Card className="mb-0">
          <CardBody>
            <Link
              className="brand-logo"
              to="/"
              onClick={(e) => e.preventDefault()}
            >
              <Icon fill="7676F1" />
              <h2 className="brand-text text-primary ms-1">Linker</h2>
            </Link>
            <CardTitle tag="h4" className="mb-1">
              به لینکر خوش آمدید ! 👋
            </CardTitle>
            <CardText className="mb-2">لطفا حساب کاربری خود را بسازید</CardText>
            <Form
              className="auth-register-form mt-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="mb-1">
                <Label className="form-label" for="register-username">
                  نام کاربری
                </Label>
                <Input
                  type="text"
                  id="register-username"
                  placeholder="johndoe"
                  autoFocus
                />
              </div>
              <div className="mb-1">
                <Label className="form-label" for="register-email">
                  ایمیل
                </Label>
                <Input
                  type="email"
                  id="register-email"
                  placeholder="john@example.com"
                />
              </div>
              <div className="mb-1">
                <Label className="form-label" for="register-password">
                  رمزعبور
                </Label>
                <InputPasswordToggle
                  className="input-group-merge"
                  id="register-password"
                />
              </div>
              {/* <div className='form-check mb-1'>
                <Input type='checkbox' id='terms' />
                <Label className='form-check-label' for='terms'>
                  I agree to
                  <a className='ms-25' href='/' onClick={e => e.preventDefault()}>
                    privacy policy & terms
                  </a>
                </Label>
              </div> */}
              <Link to="/information-form">
                <Button color="primary" block>
                  ثبت نام
                </Button>
              </Link>
            </Form>
            <p className="text-center mt-2">
              <span className="me-25">قبلا حساب کاربری ساخته اید؟</span>
              <Link to="/login-basic">
                <span>وارد شوید</span>
              </Link>
            </p>
            {/* <div className='divider my-2'>
              <div className='divider-text'>or</div>
            </div>
            <div className='auth-footer-btn d-flex justify-content-center'>
              <Button color='facebook'>
                <Facebook size={14} />
              </Button>
              <Button color='twitter'>
                <Twitter size={14} />
              </Button>
              <Button color='google'>
                <Mail size={14} />
              </Button>
              <Button className='me-0' color='github'>
                <GitHub size={14} />
              </Button>
            </div> */}
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default RegisterBasic
