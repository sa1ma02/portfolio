import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { useTheme } from "styled-components";
import { Bio } from "../../data/constants";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
const Nav = styled.nav`
background: ${({theme}) => theme.card_light};
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
}
`
const NavContainer = styled.div`
display: flex;
justify-content: space-between;
height: 60px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1200px;

`
const NavLogo = styled(LinkR)`
width: 80%;
padding: 0 6px;
display: flex;
justify-content: flex-start;
cursor: pointer;
text-decoration: none;
align-items: center;
@media screen and (max-width: 640px) {
    padding: 0 0px;
}
`;

const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 20px; /* Ajuste la position si nécessaire */
        right: 20px;
        transform: translate(-100%, 50%);
        font-size: 1.5rem;
        cursor: pointer;
        color: ${({theme}) => theme.text_primary};
    }
`;

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    list-style: none;
    @media screen and (max-width: 768px) {
        display: none;
    }

`;

const NavLink = styled.a`
    color: ${({theme}) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: ${({theme}) => theme.primary};
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 80%;
    height: 100%;
    padding: 0 6px;
    @media screen and (max-width: 640px) {
        display: none;
    }
`;

const Span = styled.div`
    padding:0 4px;
    font-weight: bold;
    font-size: 18px;
`;

const GitHubButton = styled.a`
    appearance: button;
    text-decoration: none;
    background: transparent;
    color: ${({theme}) => theme.primary};
    border: 1px solid ${({theme}) => theme.primary};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    height: 70%;
    :hover {
        background: ${({theme}) => theme.primary};
        color: ${({theme}) => theme.white};
    }

    @media screen and (max-width: 640px) {
        font-size: 0.8rem;
    }
`;

const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({theme}) => theme.card_light+99};
    transition: all 0.3s ease-in-out;
    transform: ${({open}) => (open ? "translateX(0)" : "translateX(100%)")};
    border-radius: 0 0 20 20px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.3);
    opacity: ${({open}) => (open ? "1" : "0")};
    z-index: ${({open}) => (open ? "1" : "-1")};

`;

const MobileMenuLinks = styled(LinkR)`
    color: ${({theme}) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:hover{
        color: ${({theme}) => theme.primary};
    }
`;






const Navbar = () => {

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    return (
        <Nav>
            <NavContainer>
                <NavLogo to="/">
                    <a
                        style={{
                            display:"flex",
                            alignItems: "center",
                            color: "white",
                            marginBottom: "20",
                            cursor: "pointer",

                        }}>
                        <DiCssdeck size="3rem" />
                        <Span>Portfolio</Span>
                            </a>
                </NavLogo>
                <MobileIcon> 
                    <FaBars onClick={() => setOpen(!open)} />
                </MobileIcon>
                    <NavItems>
                        <NavLink href="#about">About</NavLink>
                        <NavLink href="#skills">Skills</NavLink>
                        <NavLink href="#experience">Experience</NavLink>
                        <NavLink href="#projects">Projects</NavLink>
                        <NavLink href="#education">Education</NavLink>
                    </NavItems>
                    <ButtonContainer>
                    <GitHubButton href={Bio.github} target="display">Github Profile</GitHubButton>
                    </ButtonContainer>
            </NavContainer>

            {open && (
                <MobileMenu open={open}>
                    <Typography
                        component="a"
                        href="#about"
                        onClick={() => setOpen(false)}
                        style={{
                            color: theme.text_primary,
                            fontWeight: "500",
                            textDecoration: "none",
                            transition: "all 0.2s ease-in-out",
                        }}
                    >
                        About
                    </Typography>
                    <Typography
                        component="a"
                        href="#skills"
                        onClick={() => setOpen(false)}
                        style={{
                            color: theme.text_primary,
                            fontWeight: "500",
                            textDecoration: "none",
                            transition: "all 0.2s ease-in-out",
                        }}
                    >
                        Skills
                    </Typography>
                    <Typography
                        component="a"
                        href="#experience"
                        onClick={() => setOpen(false)}
                        style={{
                            color: theme.text_primary,
                            fontWeight: "500",
                            textDecoration: "none",
                            transition: "all 0.2s ease-in-out",
                        }}
                    >
                        Experience
                    </Typography>
                    <Typography
                        component="a"
                        href="#projects"
                        onClick={() => setOpen(false)}
                        style={{
                            color: theme.text_primary,
                            fontWeight: "500",
                            textDecoration: "none",
                            transition: "all 0.2s ease-in-out",
                        }}
                    >
                        Projects
                    </Typography>
                    <Typography
                        component="a"
                        href="#education"
                        onClick={() => setOpen(false)}
                        style={{
                            color: theme.text_primary,
                            fontWeight: "500",
                            textDecoration: "none",
                            transition: "all 0.2s ease-in-out",
                        }}
                    >
                        Education
                    </Typography>
                    <GitHubButton href={Bio.github} target="_blank">
                        Github Profile
                    </GitHubButton>
                    </MobileMenu>
                )
            }
        </Nav>
    )
};
export default Navbar;