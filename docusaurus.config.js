/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Manual de Testes',
    tagline: 'Manual para realizar testes na ferramenta ShopConvert.',
    url: 'https://mizzzael.github.io',
    baseUrl: '/shopconvert-doc-teste/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'Linx', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'Manual de Testes Shopback',
            logo: {
                alt: 'My Facebook Project Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
                // Please keep GitHub link to the right for consistency.
                {
                    href: 'https://github.com/facebook/docusaurus',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Learn',
                    items: [
                        {
                            label: 'Introdução',
                            to: 'docs/',
                        },
                        {
                            label: 'Ferramentas',
                            to: 'docs/Ferramentas',
                        },
                        {
                            label: 'Campanhas',
                            to: 'docs/Campanhas',
                        },
                        {
                            label: 'Eventos',
                            to: 'docs/Eventos',
                        },
                        {
                            label: 'Recomendação',
                            to: 'docs/Recomendacao',
                        },
                        {
                            label: 'Leads',
                            to: 'docs/Leads',
                        },
                    ],
                },
                {
                    title: 'Comunidade',
                    items: [
                        {
                            label: 'Slack',
                            href: 'https://linx3.slack.com/archives/C0106AL0ZLL',
                        },
                        {
                            label: 'Share Linx',
                            href: 'https://share.linx.com.br/#all-updates',
                        },
                    ],
                },
                {
                    title: 'Mais',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/orgs/chaordic/teams/shopback',
                        },
                    ],
                },
            ],
            // Please do not remove the credits, help to publicize Docusaurus :)
            copyright: `Copyright © ${new Date().getFullYear()} Linx Digital. Powered With Docusaurus`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl:
            'https://github.com/Mizzzael/shopconvert-doc-teste',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
            'https://github.com/Mizzzael/shopconvert-doc-teste',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
