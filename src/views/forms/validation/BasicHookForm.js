// ** React Imports
import { Fragment } from 'react'
import { useHistory} from 'react-router-dom'

// ** Third Party Components
import { Check } from 'react-feather'
import { toast } from 'react-toastify'
import { useForm, Controller } from 'react-hook-form'

// ** Custom Components
import Avatar from '@components/avatar'
import { selectThemeColors } from '@utils'

import TextareaDefault from './TextareaDefault'

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  Label,
  Input,
  Form
} from 'reactstrap'
import Select from 'react-select'

const skills = [
  { value: 'devOps', label: 'devOps', isFixed: true },
  { value: 'Front end', label: 'Front end', isFixed: true },
  { value: 'Back end', label: 'Back end', isFixed: true },
  { value: 'UI/UX', label: 'UI/UX', isFixed: false },
  { value: 'Andriod', label: 'Andriod', isFixed: false },
  { value: 'ios', label: 'ios', isFixed: false }
]

const BasicHookForm = () => {
  const history = useHistory()

  // ** Hooks
  const {
    reset,
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    if (Object.values(data).every((field) => field.length > 0)) {
      history.push('/user-table')
      toast.success(
        <Fragment>
         <div className="toastify-header">
            <div className="title-wrapper">
              <Avatar size="sm" color="success" icon={<Check size={12} />} />
              <h6 className="toast-title">اطلاعات ذخیره شد</h6>
            </div>
          </div>
          <div className="toastify-body">
            <ul className="list-unstyled mb-0">
              <li>
                <strong>نام</strong>: {data.firstNameBasic}
              </li>
              <li>
                <strong>نام خانوادگی</strong>: {data.lastNameBasic}
              </li>
              <li>
                .....
                {/* <strong>مهارت ها</strong>: {(data.skill)[0]} */}
              </li>
            </ul>
          </div>
        </Fragment>,
        { icon: false, hideProgressBar: true }
      )
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

  const handleReset = () => {
    reset({
      skill: '',
      firstNameBasic: '',
      lastNameBasic: ''
    })
  }

  return (
    <div style={{ margin: '5%' }}>
      <Card>
        <CardHeader>
          <CardTitle tag="h4">
            اطلاعات مورد نیاز برای پیدا کردن هم تیمی
          </CardTitle>
        </CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-1">
              <Label className="form-label" for="firstNameBasic">
                نام
              </Label>
              <Controller
                defaultValue=""
                control={control}
                id="firstNameBasic"
                name="firstNameBasic"
                render={({ field }) => (
                  <Input invalid={errors.firstNameBasic && true} {...field} />
                )}
              />
            </div>
            <div className="mb-1">
              <Label className="form-label" for="lastNameBasic">
                نام خانوادگی
              </Label>
              <Controller
                defaultValue=""
                control={control}
                id="lastNameBasic"
                name="lastNameBasic"
                render={({ field }) => (
                  <Input invalid={errors.lastNameBasic && true} {...field} />
                )}
              />
            </div>
            <div>
              <Label className="form-label" for="emailBasic">
                در چه زمینه هایی مهارت دارید یا دوست دارید مهارت بگیرید؟
              </Label>
              <Controller
                defaultValue=""
                control={control}
                id="skill"
                name="skill"
                render={({ field }) => (
                  <Select
                    isClearable={false}
                    theme={selectThemeColors}
                    defaultValue={[skills[2], skills[3]]}
                    isMulti
                    name="colors"
                    options={skills}
                    className="react-select"
                    classNamePrefix="select"
                    {...field}
                  />
                )}
              />
              {/* <Controller
              defaultValue=''
              control={control}
              id='emailBasic'
              name='emailBasic'
              render={({ field }) => (
                <Input
                  type='email'
                  placeholder='bruce.wayne@email.com'
                  invalid={errors.emailBasic && true}
                  {...field}
                />
              )}
            /> */}
            </div>
            <div className="mb-1"><TextareaDefault />
              {/* <Controller
                defaultValue=""
                control={control}
                id="textarea"
                name="textarea"
                render={() => <TextareaDefault />}
              /> */}
            </div>
            <div className="d-flex">
              {/* <Link to="/user-table"> */}
                <Button className="me-1" color="primary" type="submit">
                  ذخیره
                </Button>
              {/* </Link> */}
              <Button
                outline
                color="secondary"
                type="reset"
                onClick={handleReset}
              >
                بازنشانی
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </div>
  )
}

export default BasicHookForm
