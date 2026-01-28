
import Devine_Tree from '../../source/assets/Devine_Tree.png';
import play_button from '../../source/assets/play_button.png';

const Login = () => {
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
            paddingTop: '85px',
            }}
        >
            <div style = {{
                display: 'flex',
                flexDirection: 'column',
                padding: '0.5rem 0.5rem',
                backgroundColor: '#fff',
                border: '8px solid #b2ffb2',
                borderRadius: '8px',
                maxWidth: '400px',
                maxHeight: '600px',
                margin: '2rem auto',
            }}>
                <h2 style = {{color: '#1b671b', fontFamily: "'Lexend', sans-serif",
                            fontSize: '3rem', margin: '0.5rem 0.5rem', fontWeight: '1000',
                            textAlign: 'center'}}>
                    Sign-In
                </h2>
                <form style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                    <label style = {{color: '#000', fontFamily: "'Lexend', sans-serif",
                            fontSize: '2rem', marginBottom: '0.5rem', fontWeight: '400',
                            textAlign: 'center'}}>Email</label>
                    <input 
                        type="email"
                        style={{
                            backgroundColor: '#fff',
                            color: '#000',
                            border: '3px solid #000',
                            borderRadius: '4px',
                            padding: '0.5rem',
                            margin: '0 auto 0.25rem',
                            width: '65%',
                            fontSize: '1.2rem'
                        }}
                    />
                    <label style = {{color: '#000', fontFamily: "'Lexend', sans-serif",
                            fontSize: '2rem', marginBottom: '0.5rem', fontWeight: '400',
                            textAlign: 'center'}}>Password</label>
                    <input 
                        type="password"
                        style={{
                            backgroundColor: '#fff',
                            color: '#000',
                            border: '3px solid #000',
                            borderRadius: '4px',
                            padding: '0.5rem',
                            margin: '0 auto 0.25rem',
                            width: '65%',
                            fontSize: '1.2rem'
                        }}
                    />
                </form>
                <a style = {{color: 'gray', textAlign: 'left', marginTop: '0.5rem'}}>Need to Register?</a>
                <a style = {{color: 'gray', textAlign: 'left', marginTop: '0.5rem'}}>Forgot Password?</a>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                <img src={play_button} alt="Login" style={{ height: '4rem', width: '4rem' }} />
                </div>
            </div>
        </div>
    );
};

export default Login;