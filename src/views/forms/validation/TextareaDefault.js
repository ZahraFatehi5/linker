// ** Reactstrap Imports
import { Card, CardBody, Input, Label } from 'reactstrap'

const TextareaDefault = () => {
  return (
    <Card >
      <CardBody style={{marginRight:'-20px'}}>
      <Label className='form-label' for='lastNameBasic'>
            چه چیزهای دیگه ایی هست که موقع هم تیمی پیدا کردن برات مهمه               </Label>
        <Input type='textarea' name='text' id='exampleText' rows='3'  />
      </CardBody>
    </Card>
  )
}
export default TextareaDefault
