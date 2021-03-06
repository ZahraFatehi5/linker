import { Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import trialSvg from '@src/assets/images/illustration/pricing-Illustration.svg'

const FaqFilter = () => {
  //   const onChange = e => {
  //     if (handleFilter) {
  //       handleFilter(e)
  //     } else {
  //       setSearchTerm(e.target.value)
  //     }
  //   }

  return (
    <div className="pricing-free-trial" style={{ marginBottom: 30 }}>
      <Row>
        <Col className="mx-auto" lg={{ size: 10, offset: 3 }} sm="12">
          <div className="pricing-trial-content d-flex justify-content-between">
            <img
              className="pricing-trial-img img-fluid"
              src={trialSvg}
              alt="trial svg"
              style={{
                transform: 'scaleX(1)'
              }}
            />
            <div className="text-center text-md-start mt-3">
              <h3 className="text-primary">جامعه توسعه دهندگان ایرانی </h3>
              <h5>فضایی برای برقراری ارتباط بین افراد هم مسیر و هم هدف</h5>
              <div className="mt-2 mt-lg-3">
                <Link to="/register-basic">
                  <Button color="primary mb-1">عضویت</Button>
                </Link>
                <Link to="/login-basic">
                  <Button className="ms-1 mb-1" outline>
                    ورود
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
    // <div id='knowledge-base-search'>
    //   <Card
    //     className='knowledge-base-bg'
    //     style={{
    //       backgroundImage: `url(${require('@src/assets/images/banner/banner.png').default})`
    //     }}
    //   >
    //     <CardBody className='text-center'>
    //       <h2 className='text-primary'>Dedicated Source Used on Website</h2>
    //       <CardText className='mb-2'>
    //         Popular searches: <span className='fw-bolder'>Sales automation, Email marketing</span>
    //       </CardText>
    //       <Form className='kb-search-input' onSubmit={e => e.preventDefault()}>
    //         <InputGroup className='input-group-merge'>
    //           <InputGroupText>
    //             <Search size={14} />
    //           </InputGroupText>
    //           <Input value={searchTerm} onChange={e => onChange(e)} placeholder='Ask a question...' />
    //         </InputGroup>
    //       </Form>
    //     </CardBody>
    //   </Card>
    // </div>
  )
}

export default FaqFilter
