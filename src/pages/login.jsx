
import Devine_Tree from '../../src/assets/Devine_Tree.png';
import play_button from '../../src/assets/play_button.png';

const Login = () => {
    return (
        <div
            style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh', 
            backgroundImage: `url(${Devine_Tree})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: -1,
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
            <div style = {{
                display: 'flex',
                
            }}>
                <h2 style = {{color: '#1b671b', fontFamily: "'Lexend', sans-serif",
                            fontSize: '2rem', marginBottom: '1rem', fontWeight: '1000'}}>
                    Sign-In
                </h2>
                <form>
                    <label style = {{color: '#000', fontFamily: "'Lexend', sans-serif",
                            fontSize: '1.6rem', marginBottom: '0.5rem', fontWeight: '600'}}>Email</label>
                    <input type="email"></input>
                    <label style = {{color: '#000', fontFamily: "'Lexend', sans-serif",
                            fontSize: '1.6rem', marginBottom: '0.5rem', fontWeight: '600'}}>Password</label>
                    <input type="password"></input>
                </form>
                <a style = {{color: 'gray'}}>Need to Register?</a>
                <a style = {{color: 'gray'}}>Forgot Password?</a>
                <img src={play_button} alt="Login" style={{ height: '4rem' }} />
            </div>
        </div>
    );
};

export default Login;