import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} className='col-md-6' inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-6 col-md-7'
      >

      </Form.Control>

      <Button type='submit' variant='outline-info' className='p-2'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
