// ** Icons Imports
import { PhoneCall, Mail } from 'react-feather'

// ** Reactstrap Imports
import { Row, Col, Card, CardBody } from 'reactstrap'

const FaqContact = () => {
  return (
    <div className="faq-contact">
      <Row className="mt-5 pt-75">
        <Col className="text-center" sm="12">
          <h2> اطلاعات بیشتری نیاز دارید؟</h2>
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
              <h4>08 69 555 313</h4>
              <span className="text-body">
                در همه زمان برای پاسخ دهی آماده ایم
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
              <h4>linker@help.com</h4>
              <span className="text-body">
                پاسخ دهی در کوتاه ترین زمان ممکن{' '}
              </span>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default FaqContact
