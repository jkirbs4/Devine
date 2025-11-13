
import treebrain from '../assets/treebrain.png';

const Home = () => {
    return (
        <>
            <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>
                <h1 style={{ marginBottom: "2rem" }}>Welcome to Devine, a suite of brain games for dementia patients!</h1>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
                    Devine is an online game platform for individuals that struggle with dementia symptoms or for those who seek to build a stronger mental foundation to resist symptoms before they appear. The mission of Devine is to impede the symptoms of dementia for users like you through the practice of mentally stimulating games.
                </p>
                <img src={treebrain} alt="Tree Brain" style={{ display: "block", margin: "2rem auto", maxWidth: "400px", borderRadius: "12px" }} />
                <div style={{ height: "85px" }}></div> {}
            </div>
        </>
    );
};

export default Home;