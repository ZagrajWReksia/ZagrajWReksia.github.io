import styled from "styled-components";
import {Trans, useTranslation} from "react-i18next";

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
                <a href="#">
                    {t('sourceCode')}
                </a>
            </div>
        </FooterWrapper>
    )
}