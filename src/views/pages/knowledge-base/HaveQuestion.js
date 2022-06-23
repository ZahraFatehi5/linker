// ** Icons Imports
import { PhoneCall, Mail } from "react-feather"

// ** Reactstrap Imports
import { Row, Col, Card, CardBody } from "reactstrap"

const FaqContact = () => {
  return (
    <div className="faq-contact">
      <Row className="mt-5 pt-75">
        <Col className="text-center" sm="12">
          <h2>هنوز سوال دارید؟</h2>
          <p className="mb-3">
            در صورت وجود هرگونه سوال یا ابهام با ما تماس بگیرید.
          </p>
        </Col>
        <Col sm="6">
          <Card className="text-center faq-contact-card shadow-none py-1">
            <CardBody>
              <div className="avatar avatar-tag bg-light-primary mb-2 mx-auto">
                <PhoneCall size={18} />
              </div>
              <h4>+ (810) 2548 2568</h4>
              <span className="text-body">
                ما همیشه برای کمک کردن آماده ایم
              </span>
            </CardBody>
          </Card>
        </Col>
        <Col sm="6">
          <Card className="text-center faq-contact-card shadow-none py-1">
            <CardBody>
              <div className="avatar avatar-tag bg-light-primary mb-2 mx-auto">
                <Mail size={18} />
              </div>
              <h4>hello@help.com</h4>
              <span className="text-body">
                بهترین راه برای سریع تر جواب گرفتن!
              </span>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default FaqContact
