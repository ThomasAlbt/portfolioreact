import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("secret code");

  if (state.succeeded) {
    return (
      <footer>
        <p className='validation'>Merci pour votre message !</p>
      </footer>
    );
  }

  return (
    <footer>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Votre email:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          style={{ marginLeft: "1rem" }}
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="message">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          required
          style={{ marginLeft: "1rem" }}
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Envoyer
        </button>
      </form>
      <h2>Contact</h2>
    </footer>
  );
};

export default Contact;