import React, { useMemo } from 'react'
import { useForm, FieldApi } from '@tanstack/react-form'

function FieldInfo({ field }: { field: FieldApi<any, any> }) {
  return (
    <>
      {field.state.meta.touchedError ? (
        <em>{field.state.meta.touchedError}</em>
      ) : null
      }{' '}
      {field.state.meta.isValidating ? 'Validating...' : null}
    </>
  )
}

function Form() {
  const form = useForm({
    defaultValues: useMemo(
      () => ({
        companyInfo: {
          company: 'zeroSquadron',
          email: 'billing@zerosquadron.com',
          phone: '510-269-7324',
          address: '000 Warfield Ave',
          city: 'Oakland',
          state: 'Ca',
          zip: 94610
        },

        client: {
          invNumber: 0,
          issued: Date,
          due: Date,
          name: '',
          email: '',
          contact: '',
          address: '',
          city: '',
          state: '',
          zip: 94612,
          phonoe: ''
        },

        lineItems: {
          item: {
            name: '',
            desc: '',
            price: ''
          }
        },

        summary: {
          notesMessage: '',
          subtotal: 0,
          tax: 10.25,
          total: 0
        }
      }),
      []
    ),
    onSubmit: async (values) => {
      // submit here....\
      console.log(values)
    }
  })

  return (
    <div>
      <h1>invoice</h1>
      <form.Form>
        <div>
          <form.Field
            name="Client Name"
        </div>
      </form.Form>
    </div>
  )
}

export default Form;