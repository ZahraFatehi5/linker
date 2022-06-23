// ** React Imports
import { Link } from "react-router-dom"
import { Fragment, useState, useEffect } from "react"

// ** Third Party Components
import axios from "axios"

// ** Demo Components
import KnowledgeBaseHeader from "./KnowledgeBaseHeader"
import FaqContact from "./HaveQuestion"
import UsersList from "./StatisticList"
import NavbarComponent from "../../../@core/layouts/components/navbar"
// /home/zahra/Desktop/eCommerce/full-version/full-version/src/views/pages/knowledge-base/KnowledgeBase.js
// /home/zahra/Desktop/eCommerce/full-version/full-version/src/@core/layouts/components/navbar/NavbarUser.js
// ** Reactstrap Imports
import { Row, Col, Card, CardBody, CardImg } from "reactstrap"

// ** Styles
import "@styles/base/pages/page-knowledge-base.scss"

const KnowledgeBase = () => {
  // ** States
  const [data, setData] = useState(null),
    [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    axios.get("/faq/data/knowledge_base").then((res) => setData(res.data))
  }, [])

  const Content = ({ item }) => (
    <Col className="kb-search-content" key={item.id} md="4" sm="6">
      <Card>
        <Link to={`/pages/knowledge-base/${item.category}`}>
          <CardImg src={item.img} alt="knowledge-base-image" top />
          <CardBody className="text-center">
            <h4>{item.title}</h4>
            <p className="text-body mt-1 mb-0">{item.desc}</p>
          </CardBody>
        </Link>
      </Card>
    </Col>
  )

  const renderContent = () => {
    return data.map((item) => {
      const titleCondition = item.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()),
        descCondition = item.desc
          .toLowerCase()
          .includes(searchTerm.toLowerCase())

      if (searchTerm.length < 1) {
        return <Content key={item.id} item={item} />
      } else if (titleCondition || descCondition) {
        return <Content key={item.id} item={item} />
      } else {
        return null
      }
    })
  }

  return (
    <div style={{ margin: 100 }}>
      <div className="header-navbar navbar-fixed align-items-center navbar-shadow navbar-brand-center">
        <div className="navbar-container d-flex content">
          <NavbarComponent />
        </div>
      </div>
      {/* <Breadcrumbs breadCrumbTitle='Knowledge Base' breadCrumbParent='Pages' breadCrumbActive='Knowledge Base' /> */}
      <KnowledgeBaseHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      {data !== null ? (
        <div id="knowledge-base-content">
          <Row className="kb-search-content-info match-height">
            {renderContent()}
          </Row>
        </div>
      ) : null}
      <UsersList />
      <FaqContact />
    </div>
  )
}

export default KnowledgeBase
