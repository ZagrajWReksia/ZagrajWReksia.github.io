import './style.css';
import styled from "styled-components";
import {Box} from "../../components/box.tsx";
import {Link} from "react-router";
import {Button} from "../../components/button.tsx";
import {useTranslation} from "react-i18next";

const Background = styled.div`
    border-radius: 10px;
`;

const Message = styled.div`
    padding: 20px;
    text-align: left;
`;

const Logo = () => (
    <img
        src="/logo.png"
        style={{
            display: 'block',
            width: '100%',
            maxWidth: '400px',
            margin: 'auto',
            marginBottom: '10px'
        }}
        alt="logo"
    />
);


function About() {
    const { t } = useTranslation();

    return (
        <Background>
            <Message>
                <Logo />

                <div>
                    <Link to="/">
                        <Button style={{'marginBottom': '10px', textDecoration: 'none'}}>
                            {t('goBack')}
                        </Button>
                    </Link>
                </div>
                <Box>
                    <h3 style={{marginTop: 0}}>Credits</h3>
                    <div><strong>Website:</strong></div>
                    <div>Code: Adikso</div>
                    <div>Background: Paweł Wierzbicki</div>
                    <div>Romanian translation: Serena</div>
                    <div>Polish translation: Adikso</div>
                    <div>English translation: Serena, Adikso</div>
                    <br/>
                    <div><strong>Games collection:</strong></div>
                    <div>No-CD Patches: Dove6</div>
                    <div>ISOs from collections of: Dove6, ReksioBlog, HeavenlyTape, Serena, KretonPodziemny</div>
                    <div>City of Secrets 2 PC port: Dove6, Mysliwy112</div>
                    <div>English translations: Serena</div>
                    <div>Patched Polish games: Adikso</div>
                    <div>Patched Romanian games: Serena</div>
                    <br/>
                    <div><strong>ReksioEngine:</strong></div>
                    <div>Main programmer: Adikso</div>
                    <div>Programming help: Dove6, Yoshida</div>
                    <div>Previous reverse engineering work: Dove6, Yoshida, Mysliwy112</div>
                </Box>
                <Box style={{marginTop: '10px'}}>
                    Public statistics of this website can be found <a href="https://dashboard.simpleanalytics.com/zagrajwreksia.pl">here</a>
                </Box>
            </Message>
        </Background>
    );
}

export default About;