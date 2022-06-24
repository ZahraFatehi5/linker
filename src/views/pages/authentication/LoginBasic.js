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

const LoginBasic = () => {
  const history = useHistory()
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    if (Object.values(data).every((field) => field.length > 0)) {
      history.push('/user-table')
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
              به لینکر خوش آمدید! 👋
            </CardTitle>
            <CardText className="mb-2">لطفا وارد حساب کاربری خود شوید</CardText>
            <Form
              className="auth-login-form mt-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-1">
                <Label className="form-label" for="login-email">
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
                  placeholder="ali@example.com"
                  autoFocus
                  {...field}
                  invalid={errors.email && true}
                />
                )}
              />
              </div>
              <div className="mb-1">
                <div className="d-flex justify-content-between">
                  <Label className="form-label" for="login-password">
                    رمزعبور
                  </Label>
                  <Link to="/pages/forgot-password-basic">
                    <small> رمز خود را فراموش کرده اید؟</small>
                  </Link>
                </div>
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
              <div className="form-check mb-1">
                <Input type="checkbox" id="remember-me" />
                <Label className="form-check-label" for="remember-me">
                  مرا به خاطر بسپار
                </Label>
              </div>
              {/* <Link to="/user-table"> */}
                <Button color="primary" block>
                  ورود
                </Button>
              {/* </Link> */}
            </Form>
            <p className="text-center mt-2">
              <span className="me-25">هنوز ثبت نام نکرده اید؟</span>
              <Link to="/register-basic">
                <span>ساخت حساب کاربری</span>
              </Link>
            </p>
            {/* <div className='divider my-2'>
              <div className='divider-text'>or</div>
            </div> */}
            {/* <div className='auth-footer-btn d-flex justify-content-center'>
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

export default LoginBasic
