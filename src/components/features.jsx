/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react'
import clsx from 'clsx'
import styles from './features.module.css'

const FeaturesList = [
    {
        title: 'Feito Para o Time',
        Img: require('../../static/img/suricato-2.svg').default,
        text: (
            <>
                Está documentação é livre para o uso do time,
                caso tenha algo a acrescentar ou queira melhorar,
                você tem total liberdade para altear esse código!
            </>
        )
    },
    {
        title: 'Foco em praticidade',
        Img: require('../../static/img/suricato-1.svg').default,
        text: (
            <>
                Esse Tutorial tem o Objetivo de ser prático,
                e auxiliar qualquer um à executar a ardua tarefa
                de testar as peças que compoõesm a Suite ShopBack.
            </>
        )
    },
    {
        title: 'Lembre-se!',
        Img: require('../../static/img/suricato-3.svg').default,
        text: (
            <>
                Essa documentação é feita para todos e por todos, 
                caso tenha algo a acrescentar pense em passa o conhecimento 
                adiante assim, a documentação nunca perderá seu propósito, ajudar
                aos mais jovens!
            </>
        )
    },
];

function Feature({title, Img, text}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Img className={clsx('col col--10')} halt={title} />
            </div>
            <div className="text--center">
                <h3 className={styles.title}>
                    {title}
                </h3>
            </div>
            <div className="text--center">
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default function HomeFeaturesComponent() {
    return (
        <section className={clsx('col col--12')} >
            <section className={styles.features}>
                <section className='container'>
                    <section className="row">
                        {FeaturesList.map((props, index) => (
                            <Feature key={index} {...props} />
                        ))}
                    </section>
                </section>
            </section>
        </section>
    )
}