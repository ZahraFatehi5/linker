// ** Reactstrap Imports
import { Card, CardBody, Input, Label } from 'reactstrap'

const TextareaDefault = () => {
  return (
    <Card>
      <CardBody style={{ marginRight: '-20px' }}>
        <Label className="form-label" for="lastNameBasic">
          اطلاعات دیگری که به نظرتان برای پیدا کردن هم تیمی مناسب باید داشت را
          وارد کنید{' '}
        </Label>
        <Input type="textarea" name="text" id="exampleText" rows="3" />
      </CardBody>
    </Card>
  )
}
export default TextareaDefault
