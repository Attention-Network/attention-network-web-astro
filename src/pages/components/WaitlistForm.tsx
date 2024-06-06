import React from "react"

export default function WaitlistForm() {
  const [success, setSuccess] = React.useState(false)
  const [pending, setPending] = React.useState(false)

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    setPending(true)
    // wait for 2 seconds to simulate a network request
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const formData = new FormData(event.target)
    const name = formData.get("name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}`)
    setPending(false)
    setSuccess(true)
    event.target.reset()
  }

  return (
    <form onSubmit={handleFormSubmit} className='form'>
      <label htmlFor='name'>Name:</label>
      <input type='text' name='name' id='name' placeholder='Name' />
      <label htmlFor='email'>Email:</label>
      <input type='email' name='email' id='email' placeholder='Email' />
      <label htmlFor='phone'>Phone:</label>
      <input type='tel' name='phone' id='phone' placeholder='Phone' />
      {success && (
        <div className='info'>Thank you! Your response has been submitted.</div>
      )}

      <button
        disabled={pending}
        type='submit'
        value='Submit'
        className='btn btn--primary'
      >
        {pending ? "Submitting..." : "Submit"}
      </button>
    </form>
  )
}
