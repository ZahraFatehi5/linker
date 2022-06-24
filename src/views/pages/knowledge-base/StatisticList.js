// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Custom Components
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'

// ** Icons Imports
import { User, UserPlus, UserCheck } from 'react-feather'

// ** Styles
import '@styles/react/apps/app-users.scss'

const UsersList = () => {
  return (
    <div className="app-user-list">
      <Row>
        <Col lg="4" sm="6">
          <StatsHorizontal
            color="primary"
            statTitle="  افراد عضو شده"
            icon={<User size={20} />}
            renderStats={<h3 className="fw-bolder mb-75">5</h3>}
          />
        </Col>
        <Col lg="4" sm="6">
          <StatsHorizontal
            color="danger"
            statTitle="منتور ثبت شده"
            icon={<UserPlus size={20} />}
            renderStats={<h3 className="fw-bolder mb-75">0</h3>}
          />
        </Col>
        <Col lg="4" sm="6">
          <StatsHorizontal
            color="success"
            statTitle=" افرادی که باهم هم مسیر شدند"
            icon={<UserCheck size={20} />}
            renderStats={<h3 className="fw-bolder mb-75">1</h3>}
          />
        </Col>
      </Row>
    </div>
  )
}

export default UsersList
