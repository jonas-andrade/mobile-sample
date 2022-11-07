import styled from "styled-components/native"
import { LinearGradient } from 'expo-linear-gradient';

export const PosterContainer= styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 460px;

`;

export const PosterImage = styled.ImageBackground`

    width: 100%;
    height: 100%;

`;

export const Gradient = styled(LinearGradient)`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-horizontal: 24px;
    padding-top: 56px;

`;


