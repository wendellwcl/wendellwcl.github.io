import styled from 'styled-components'

export const Container = styled.section`
    padding: 30px;
`

export const FooterContainer = styled.footer`
    padding: 30px;
`

export const Title = styled.h2`
    text-align: center;
    font-size: 2.5em;
    font-weight: bold;
    margin-bottom: 30px;

    color: ${props => props.color ? props.color : 'var(--dark)' };
`

export const ButtonLink = styled.a`
    text-decoration: none;
    color: #FFF;
    background-color: var(--color);
    padding: 5px 15px;
    margin-right: 15px;
    border: 2px solid var(--color);
    border-radius: 5px;
    transition: 0.3s;

    &:hover{
        color: var(--color);
        background-color: transparent;
    }

    &:last-child{
        margin-right: 0;
    }

    i{
        margin-right: 10px;
    }
`

export const Button = styled.button`
    color: #FFF;
    background-color: var(--color);
    padding: 10px 15px;
    border: 2px solid var(--color);
    border-radius: 5px;
    transition: 0.3s;

    &:hover{
        color: var(--color);
        background-color: transparent;
    }

    i{
        margin-right: 10px;
    }
`

export const Emphasis = styled.span`
    font-weight: bold;
    color: ${props => props.color ? props.color : 'var(--dark)' };
`

export const Skill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        max-height: 150px;
        background-color: rgba(255, 255, 255, 0.2);
        border-right: 2px solid rgba(255, 255, 255, 0.5);
        border-bottom: 2px solid rgba(255, 255, 255, 0.5);
        border-radius: 30px;
        padding: 15px;
        backdrop-filter: blur(5px);
        object-fit: cover;
        transition: .3s;

        &:hover{
            transform: scale(1.1);
        }
    }

    h3{
        font-size: 1.3em;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        color: #FFF;
        margin-top: 5px;
    }
`

export const Card = styled.div`
    box-shadow: 0px 0px 0px var(--color);
    transition: 0.3s;
    text-align: end;

    &:hover{
        box-shadow: 0px 5px 10px var(--color);
    }

    img{
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 85%);
    }

    h3{
        position: relative;
        top: -20%;
        margin-bottom: 0;
        text-align: start;
        color: var(--color);
    }
`