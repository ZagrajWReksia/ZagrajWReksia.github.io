import styled from "styled-components";
import {Trans, useTranslation} from "react-i18next";
import {Link} from "react-router";

const FooterWrapper = styled.footer`
    text-align: center;
    padding: 20px;
`

export const Footer = () => {
    const { t } = useTranslation();
    return (
        <FooterWrapper>
            <Trans i18nKey="createdAndManagedBy">
                Created and managed by <a href="https://adikso.net/about">Adikso</a>
            </Trans>
            <div>
                <a href="mailto:burektor@zagrajwreksia.pl">burektor@zagrajwreksia.pl</a>
            </div>
            <div>
                <Link to="/about">{t('credits')}</Link>
                &nbsp;|&nbsp;
                <a href="https://github.com/ZagrajWReksia/ZagrajWReksia.github.io">
                    {t('sourceCode')}
                </a>
            </div>
        </FooterWrapper>
    )
}