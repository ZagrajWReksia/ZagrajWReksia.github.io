import styled from "styled-components";
import {useTranslation} from "react-i18next";
import Flag from "./flag.tsx";

const FlagLink = styled.a`
    text-decoration: none;
`

export const LanguageSelector = () => {
    const { t, i18n } = useTranslation();

    return (
        <div style={{textAlign: 'center'}}>
            <b>{t('viewInOtherLanguages')}</b>
            <br/>

            {Object.keys(i18n.options.resources!).map(code => (
                <FlagLink key={code} href="#" onClick={() => i18n.changeLanguage(code)}>
                    <Flag code={code}/>&nbsp;
                </FlagLink>
            ))}
        </div>
    );
}
