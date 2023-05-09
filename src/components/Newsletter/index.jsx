import { MailIcon } from "lucide-react";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setValidEmail(regexEmail.test(email));

    if (validEmail) {
      setMessage(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`);
      setEmail("");
    } else {
      setMessage("Por favor, preencha o campo com um e-mail válido!");
    }
  };

  return (
    <>
      {message ? <p>{message}</p> : null}
      <form onSubmit={handleSubmit}>
        <div className="icon">
          <MailIcon size={16} />
        </div>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Insira seu e-mail" required />
        <button>Assinar newsletter</button>
      </form>
    </>
  );
};

export default Newsletter;
