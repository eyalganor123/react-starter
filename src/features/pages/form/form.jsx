import React from 'react'
import { useForm } from 'react-hook-form'
import './form.css'

export default function Form() {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => { console.log(data) }

  console.log(watch('example')) // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="example" defaultValue="test" ref={register} />
      <hr />
   
      <input
        name="exampleRequired"
        ref={register({ required: true, maxLength: 10 })}
      />
      {errors.exampleRequired && <p>This field is required</p>}
      <input type="submit" />
    </form>
  );
}
