
import Devine_Tree from '../assets/Devine_Tree.png';
import Footer from "../components/Footer";

const Games_SignedIn = () => {
    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                minHeight: '50vh',
                backgroundImage: `url(${Devine_Tree})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: '150px',
                    paddingBottom: '150px'
                }}
            >
                <h1
                    style={{
                        fontSize: '4rem',
                        fontFamily: "'Kaushan Script', cursive",
                        marginBottom: '2rem',
                        textAlign: 'center',
                    }}
                >
                    Game Library
                </h1>

                {/* Page content goes here */}
                
            </div>
        </div>
    );
};

export default Games_SignedIn;