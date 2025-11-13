import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isHover, setIsHover] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Template behavior: replace with real auth later
        console.log('Login attempt', { username, password: '•••' });
        alert(`Welcome, ${username || 'user'}! (template only)`);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem 1rem' }}>
            <form onSubmit={handleSubmit} style={{
                width: '100%',
                maxWidth: 420,
                background: '#2e2e2e',
                color: '#fff',
                padding: '2rem',
                borderRadius: 12,
                boxShadow: '0 6px 16px rgba(0,0,0,0.25)'
            }}>
                <h1 style={{ margin: '0 0 1.5rem', fontSize: '1.75rem' }}>Login</h1>

                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="username" style={{ display: 'block', marginBottom: 8 }}>Username</label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        required
                        style={{
                            width: '100%',
                            padding: '0.75rem 0.9rem',
                            borderRadius: 8,
                            border: '1px solid #3a3a3a',
                            background: '#1f1f1f',
                            color: '#fff'
                        }}
                    />
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: 8 }}>Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                        style={{
                            width: '100%',
                            padding: '0.75rem 0.9rem',
                            borderRadius: 8,
                            border: '1px solid #3a3a3a',
                            background: '#1f1f1f',
                            color: '#fff'
                        }}
                    />
                </div>

                <button type="submit" style={{
                    width: '100%',
                    padding: '1.1rem 1.25rem',
                    borderRadius: 12,
                    border: 'none',
                    background: '#58e16c',
                    color: '#0c0c0c',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    cursor: 'pointer',
                    transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                    transform: isHover ? 'scale(1.03)' : 'scale(1)',
                    boxShadow: isHover ? '0 6px 14px rgba(0,0,0,0.25)' : 'none'
                }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                >
                    Sign in
                </button>

                <p style={{ marginTop: '0.75rem', opacity: 0.8, fontSize: '0.9rem' }}>
                    This is a template form. Hook it up to your authentication later.
                </p>
            </form>
        </div>
    );
};

export default Login;