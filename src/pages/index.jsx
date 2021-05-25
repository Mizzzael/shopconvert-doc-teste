/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import HomeFeaturesComponent from '../components/features.jsx'

export default function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Documentação para testes na plataforma ShopBack">
            <main id="#app">
                <header className={clsx('hero hero--primary', styles.heroBanner)}>
                    <div className="container">
                        <h1 className="hero__title">{siteConfig.title}</h1>
                        <p className="hero__subtitle">{siteConfig.tagline}</p>
                    </div>
                </header>
                <section className={clsx('col col--12')}>
                    <HomeFeaturesComponent />
                </section>
            </main>
        </Layout>
    );
}
