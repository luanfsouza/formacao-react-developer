import styled from "styled-components"

export const HomeContainer = styled.main`
width: 100%;
max-width: 80%;
margin: 0 auto;
margin-top: 120px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

export const Title = styled.h2`
font-family: sans-serif;
font-style: normal;
font-weight: 700;
font-size: 32px;
width: 320px;
margin-bottom: 20px;
line-height: 44px;

color: #ffffff;
`;

export const TitleHighLight = styled.span`
color: #e41059;
`;

export const TextContent = styled.p`
font-family: sans-serif;
font-style: normal;
font-weight: 500;
font-size: 16px;
width: 420px;
margin-bottom: 20px;
line-height: 22px;

color: #ffffff;
`;

export const BannerPicture = styled.img`
width: 600px;
height: 400px;
`;