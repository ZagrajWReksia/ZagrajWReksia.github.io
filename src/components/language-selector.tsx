import styled from "styled-components";
import {useTranslation} from "react-i18next";

const FlagLink = styled.a`
    text-decoration: none;
`

export const LanguageSelector = () => {
    const { t, i18n } = useTranslation();
    return (
        <div style={{textAlign: 'center'}}>
            <b>{t('viewInOtherLanguages')}</b>
            <br/>
            <FlagLink href="#" onClick={() => i18n.changeLanguage('pl')}>
                🇵🇱
            </FlagLink>
            <FlagLink href="#" onClick={() => i18n.changeLanguage('ro')}>🇷🇴</FlagLink>
            <FlagLink href="#" onClick={() => i18n.changeLanguage('cz')}>🇨🇿</FlagLink>
            <FlagLink href="#" onClick={() => i18n.changeLanguage('hu')}>🇭🇺</FlagLink>
            <FlagLink href="#" onClick={() => i18n.changeLanguage('ru')}>🇷🇺</FlagLink>
            <FlagLink href="#" onClick={() => i18n.changeLanguage('en')}>
                🇬🇧
            </FlagLink>
        </div>
    );
}