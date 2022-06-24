// ** React Imports
import { Link } from 'react-router-dom'

// ** Icons Imports
import { ChevronLeft } from 'react-feather'
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
const ForgotPasswordBasic = () => {
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
              رمز عبور خود را فراموش کرده اید 🔒
            </CardTitle>
            <CardText className="mb-2">
              ایمیل خود را وارد کنید
            </CardText>
            <Form
              className="auth-forgot-password-form mt-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="mb-1">
                <Label className="form-label" for="login-email">
                  ایمیل
                </Label>
                <Input
                  type="email"
                  id="login-email"
                  autoFocus
                />
              </div>
              <Button color="primary" block>
                ارسال لینک بازیابی
              </Button>
            </Form>
            <p className="text-center mt-2">
              <Link to="/login-basic">
                <span className="align-middle">بازگشت به صفحه ورود</span>
                <ChevronLeft className="rotate-ltr me-25" size={14} />
              </Link>
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default ForgotPasswordBasic
