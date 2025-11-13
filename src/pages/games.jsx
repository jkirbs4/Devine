
import { GamesGrid, GamePanel, GameTitle, GameDescription, GameIcon } from '../components/GamePanel/GamePanelElements';

const gameList = [
    {
        title: 'Exercise #1',
        description: 'This is a description of exercise 1.',
        icon: '🧠',
    },
    {
        title: 'Exercise #2',
        description: 'This is a description of exercise 2.',
        icon: '🔤',
    },
    {
        title: 'Exercise #3',
        description: 'This is a description of exercise 3.',
        icon: '🔢',
    },
    {
        title: 'Exercise #4',
        description: 'This is a description of exercise 4.',
        icon: '🔎',
    },
];

const Games = () => {
    return (
        <div style={{textAlign: "center"}}>
            <h1>Cognitive Exercises</h1>
            <p style={{fontSize: "24px", color: "#6759ffff"}}>
                Select any exercise below to begin
            </p>
            <GamesGrid>
                {gameList.map((game, idx) => (
                    <GamePanel key={idx}>
                        <GameIcon>{game.icon}</GameIcon>
                        <GameTitle>{game.title}</GameTitle>
                        <GameDescription>{game.description}</GameDescription>
                    </GamePanel>
                ))}
            </GamesGrid>
        </div>
    );
};

export default Games;