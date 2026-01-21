
import Devine_Tree from '../../source/assets/Devine_Tree.png';
import Footer from "../components/Footer";

const Home = () => {
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
          top: '150px'
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
          Devine
        </h1>

        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            padding: '0 10%',
            fontFamily: "'Lexend', sans-serif",
            fontSize: '1.25rem',
            color: 'black',
            position: 'relative',
            top: '120px',
          }}
        >
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Set Goals</div>
            <div style={{ fontSize: '1rem', color: 'gray', marginTop: '0.5rem' }}>
              Establish objectives for self-improvement.
            </div>
          </div>

          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Train The Mind</div>
            <div style={{ fontSize: '1rem', color: 'gray', marginTop: '0.5rem' }}>
              Dementia can take its toll. Let us help you<br />
              impede its effects with our suite of brain<br />
              training games.
            </div>
          </div>

          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Verify Progress</div>
            <div style={{ fontSize: '1rem', color: 'gray', marginTop: '0.5rem' }}>
              See the hard earned results of your training visually.
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            padding: '0 10%',
            fontFamily: "'Lexend', sans-serif",
            fontSize: '1.25rem',
            color: 'black',
            position: 'relative',
            top: '140px',
          }}
        >
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Smart Scaling</div>
            <div style={{ fontSize: '1rem', color: 'gray', marginTop: '0.5rem' }}>
              The games shift in difficulty as you<br />
              improve, keeping every session<br />
              challenging but achievable.
            </div>
          </div>

          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Social Connect</div>
            <div style={{ fontSize: '1rem', color: 'gray', marginTop: '0.5rem' }}>
              Stay in touch with people who matter.<br />
              Share milestones, compare progress,<br />
              and keep each other motivated.
            </div>
          </div>

          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Your Path</div>
            <div style={{ fontSize: '1rem', color: 'gray', marginTop: '0.5rem' }}>
              Your training adapts as you grow.<br />
              Get recommendations that match your<br />
              strengths, weaknesses and goals.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;