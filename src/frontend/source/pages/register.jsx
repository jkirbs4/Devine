import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Devine_Tree from '../assets/Devine_Tree.png';
import play_button from '../assets/play_button.png';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3001/api/send-thank-you', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setStatus(data.message || data.error);
    } catch (err) {
      setStatus('Error sending email');
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundImage: `url(${Devine_Tree})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1
        style={{
          fontSize: '4rem',
          fontFamily: "'Kaushan Script', cursive",
          marginBottom: '2rem',
          marginTop: '100px',
          textAlign: 'center',
        }}
      >
        Devine
      </h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '0.5rem 0.5rem',
          backgroundColor: '#fff',
          border: '8px solid #b2ffb2',
          borderRadius: '8px',
          maxWidth: '400px',
          maxHeight: '600px',
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            color: '#1b671b',
            fontFamily: "'Lexend', sans-serif",
            fontSize: '3rem',
            margin: '0.5rem 0.5rem',
            fontWeight: '1000',
            textAlign: 'center',
          }}
        >
          Register
        </h2>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '0 1rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <label
              style={{
                color: '#000',
                fontFamily: "'Lexend', sans-serif",
                fontSize: '2rem',
                fontWeight: '400',
                minWidth: '275px',
                whiteSpace: 'nowrap',
              }}
            >
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              style={{
                backgroundColor: '#fff',
                color: '#000',
                border: '3px solid #000',
                borderRadius: '4px',
                padding: '0.5rem',
                fontSize: '1.2rem',
                flex: '1',
              }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <label
              style={{
                color: '#000',
                fontFamily: "'Lexend', sans-serif",
                fontSize: '2rem',
                fontWeight: '400',
                minWidth: '275px',
                whiteSpace: 'nowrap',
              }}
            >
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              style={{
                backgroundColor: '#fff',
                color: '#000',
                border: '3px solid #000',
                borderRadius: '4px',
                padding: '0.5rem',
                fontSize: '1.2rem',
                flex: '1',
              }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <label
              style={{
                color: '#000',
                fontFamily: "'Lexend', sans-serif",
                fontSize: '2rem',
                fontWeight: '400',
                minWidth: '275px',
                whiteSpace: 'nowrap',
              }}
            >
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{
                backgroundColor: '#fff',
                color: '#000',
                border: '3px solid #000',
                borderRadius: '4px',
                padding: '0.5rem',
                fontSize: '1.2rem',
                flex: '1',
              }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <label
              style={{
                color: '#000',
                fontFamily: "'Lexend', sans-serif",
                fontSize: '2rem',
                fontWeight: '400',
                minWidth: '275px',
              }}
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                backgroundColor: '#fff',
                color: '#000',
                border: '3px solid #000',
                borderRadius: '4px',
                padding: '0.5rem',
                fontSize: '1.2rem',
                flex: '1',
              }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <label
              style={{
                color: '#000',
                fontFamily: "'Lexend', sans-serif",
                fontSize: '2rem',
                fontWeight: '400',
                minWidth: '275px',
                whiteSpace: 'nowrap',
              }}
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                backgroundColor: '#fff',
                color: '#000',
                border: '3px solid #000',
                borderRadius: '4px',
                padding: '0.5rem',
                fontSize: '1.2rem',
                flex: '1',
              }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <label
              style={{
                color: '#000',
                fontFamily: "'Lexend', sans-serif",
                fontSize: '2rem',
                fontWeight: '400',
                minWidth: '275px',
                whiteSpace: 'nowrap',
              }}
            >
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{
                backgroundColor: '#fff',
                color: '#000',
                border: '3px solid #000',
                borderRadius: '4px',
                padding: '0.5rem',
                fontSize: '1.2rem',
                flex: '1',
              }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <label
              style={{
                color: '#000',
                fontFamily: "'Lexend', sans-serif",
                fontSize: '2rem',
                fontWeight: '400',
                minWidth: '275px',
                whiteSpace: 'nowrap',
              }}
            >
              Date of Birth
            </label>
            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
              style={{
                backgroundColor: '#fff',
                color: '#000',
                border: '3px solid #000',
                borderRadius: '4px',
                padding: '0.5rem',
                fontSize: '1.2rem',
                flex: '1',
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              marginTop: '1rem',
              padding: '0.5rem',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: '#1b671b',
              color: '#fff',
              fontSize: '1.2rem',
              cursor: 'pointer',
            }}
          >
            Register
          </button>
        </form>

        {/* Status Message */}
        <p style={{ textAlign: 'center', color: 'green', marginTop: '0.5rem' }}>{status}</p>

        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
          {/* <img
            src={play_button}
            alt="Login"
            style={{ height: '4rem', width: '4rem', cursor: 'pointer' }}
            onClick={handlePlayClick}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
