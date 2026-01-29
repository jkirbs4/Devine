
import Devine_Tree from '../../source/assets/Devine_Tree.png';

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
            paddingBottom: '85px',
            }}
        >
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 'calc(100vh - 170px)',
            }}>
            <div style = {{
                display: 'flex',
                flexDirection: 'column',
                padding: '1rem 1rem',
                backgroundColor: '#fff',
                border: '8px solid #b2ffb2',
                borderRadius: '8px',
                width: '600px',
                maxHeight: '700px',
            }}>
                <h2 style = {{color: '#1b671b', fontFamily: "'Lexend', sans-serif",
                            fontSize: '3.5rem', margin: '1rem 0.5rem', fontWeight: '1000',
                            textAlign: 'center'}}>
                    Sign-In
                </h2>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '0 1rem' }}>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <label style = {{color: '#000', fontFamily: "'Lexend', sans-serif",
                                fontSize: '2.25rem', fontWeight: '400',
                                minWidth: '175px', whiteSpace: 'nowrap'}}>Email</label>
                        <input 
                            type="email"
                            style={{
                                backgroundColor: '#fff',
                                color: '#000',
                                border: '3px solid #000',
                                borderRadius: '4px',
                                padding: '0.75rem',
                                fontSize: '1.4rem',
                                width: '400px'
                            }}
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <label style = {{color: '#000', fontFamily: "'Lexend', sans-serif",
                                fontSize: '2.25rem', fontWeight: '400',
                                minWidth: '175px', whiteSpace: 'nowrap'}}>Password</label>
                        <input 
                            type="password"
                            style={{
                                backgroundColor: '#fff',
                                color: '#000',
                                border: '3px solid #000',
                                borderRadius: '4px',
                                padding: '0.75rem',
                                fontSize: '1.4rem',
                                width: '400px'
                            }}
                        />
                    </div>
                </form>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1.5rem', marginBottom: '1rem', gap: '2.5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <a style = {{color: 'gray', fontSize: '1.1rem'}}>Need to Register?</a>
                        <a style = {{color: 'gray', fontSize: '1.1rem'}}>Forgot Password?</a>
                    </div>
                    <button 
                        type="submit"
                        style={{
                            backgroundColor: '#D9D9D9',
                            color: '#000',
                            border: '5px solid #1b671b',
                            borderRadius: '8px',
                            padding: '1rem 2rem',
                            fontSize: '1.75rem',
                            fontWeight: '600',
                            fontFamily: "'Lexend', sans-serif",
                            cursor: 'pointer'
                        }}
                    >
                        Sign-In
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;