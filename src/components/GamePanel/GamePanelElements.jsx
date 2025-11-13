import styled from 'styled-components';

export const GamesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
`;

export const GamePanel = styled.div`
    background: #ffffff;
    border-radius: 15px;
    padding: 1.5rem;
    min-height: 200px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
`;

export const GameTitle = styled.h2`
    color: #333;
    margin-bottom: 1rem;
    font-size: 1.5rem;
`;

export const GameDescription = styled.p`
    color: #666;
    font-size: 1rem;
    line-height: 1.4;
`;

export const GameIcon = styled.div`
    width: 80px;
    height: 80px;
    background-color: #58e16c;
    border-radius: 50%;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2rem;
`;