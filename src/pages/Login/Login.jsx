import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <main>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </main>
  );
}