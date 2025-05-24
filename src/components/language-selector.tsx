import styled from "styled-components";
import {useTranslation} from "react-i18next";

const FlagLink = styled.a`
    text-decoration: none;
`

export const LanguageSelector = () => {
    const { t, i18n } = useTranslation();

    const getFlagEmoji = (countryCode: string) => {
        if (countryCode === 'en') {
            countryCode = 'gb'
        }

        const codePoints = countryCode.toUpperCase().split("").map((char) => 127397 + char.charCodeAt(0));
        return String.fromCodePoint(...codePoints);
    }

    return (
        <div style={{textAlign: 'center'}}>
            <b>{t('viewInOtherLanguages')}</b>
            <br/>

            {Object.keys(i18n.options.resources!).map(code => (
                <FlagLink key={code} href="#" onClick={() => i18n.changeLanguage(code)}>
                    {getFlagEmoji(code)}&nbsp;
                </FlagLink>
            ))}
        </div>
    );
}
