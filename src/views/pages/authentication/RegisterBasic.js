// ** React Imports
import { Link, useHistory } from 'react-router-dom'

// ** Custom Components
import InputPasswordToggle from '@components/input-password-toggle'
import { ReactComponent as Icon } from '@src/assets/images/svg/logo.svg'

import { useForm, Controller } from 'react-hook-form'

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
  const history = useHistory()
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    if (Object.values(data).every((field) => field.length > 0)) {
      history.push('/information-form')
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual'
          })
        }
      }
    }
  }

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
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-1">
                <Label className="form-label" for="register-username">
                  نام کاربری
                </Label>
                <Controller
                defaultValue=""
                control={control}
                id="username"
                name="username"
                render={({ field }) => (
                  <Input
                  type="text"
                  id="username"
                  autoFocus
                  {...field}
                  invalid={errors.username && true}
                />
                )}/>
              </div>
              <div className="mb-1">
                <Label className="form-label" for="register-email">
                  ایمیل
                </Label>
                <Controller
                defaultValue=""
                control={control}
                id="email"
                name="email"
                render={({ field }) => (
                  <Input
                  type="email"
                  id="login-email"
                  placeholder=""
                  autoFocus
                  {...field}
                  invalid={errors.email && true}
                />
                )}
              />
              </div>
              <div className="mb-1">
                <Label className="form-label" for="register-password">
                  رمزعبور
                </Label>
                <Controller
                defaultValue=""
                control={control}
                id="pass"
                name="pass"
                render={({ field }) => (
                  <InputPasswordToggle
                  className="input-group-merge"
                  id="pass"
                  {...field}
                  invalid={errors.pass && true}
                /> 
                )}
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
              {/* <Link to="/information-form"> */}
                <Button color="primary" block>
                  ثبت نام
                </Button>
              {/* </Link> */}
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
