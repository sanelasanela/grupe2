import  { useState } from 'react';
import './LoginCSS.css';

export function Login() {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const handleSubmit = () => {

            if (password.length < 8) {
                alert('Das Passwort muss mindestens 8 Zeichen lang sein.');
                return;
            }

            console.log('Email:', email);
            console.log('Passwort:', password);

            setEmail('');
            setPassword('');
        };

        return (
            <form onSubmit={handleSubmit} className="login-container">
                <label>
                    E-Mail:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    Passwort:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button type="submit">Anmelden</button>

            </form>
        );
}
